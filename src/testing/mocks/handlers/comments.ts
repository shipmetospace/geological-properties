import { HttpResponse, http } from 'msw';

import { env } from '@/config/env';

import { db, persistDb } from '../db';
import { networkDelay, requireAuth, sanitizeUser } from '../utils';

type CreateCommentBody = {
  body: string;
  discussionId: string;
};

export const commentsHandlers = [
  http.get(`${env.API_URL}/comments`, async ({ request, cookies }) => {
    await networkDelay();

    try {
      const { error } = requireAuth(cookies);
      if (error) {
        return HttpResponse.json({ message: error }, { status: 401 });
      }
      const url = new URL(request.url);
      const discussionId = url.searchParams.get('discussionId') || '';
      const page = Number(url.searchParams.get('page') || 1);

      const total = (db.comment.findMany() as any[]).filter(
        (c) => c.discussionId === discussionId,
      ).length;

      const totalPages = Math.ceil(total / 10);

      const comments = (db.comment.findMany() as any[])
        .filter((c) => c.discussionId === discussionId)
        .slice(10 * (page - 1), 10 * (page - 1) + 10)
        .map(({ authorId, ...comment }) => {
          const author = (db.user.findMany() as any[]).find(
            (u) => u.id === authorId,
          );
          return {
            ...comment,
            author: author ? sanitizeUser(author) : {},
          };
        });
      return HttpResponse.json({
        data: comments,
        meta: {
          page,
          total,
          totalPages,
        },
      });
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  http.post(`${env.API_URL}/comments`, async ({ request, cookies }) => {
    await networkDelay();

    try {
      const { user, error } = requireAuth(cookies);
      if (error) {
        return HttpResponse.json({ message: error }, { status: 401 });
      }
      const data = (await request.json()) as CreateCommentBody;
      const result = db.comment.create({
        id:
          (globalThis as any)?.crypto?.randomUUID?.() ??
          Math.random().toString(36).slice(2),
        body: data.body,
        discussionId: data.discussionId,
        authorId: user?.id as string,
        createdAt: Date.now(),
      } as any);
      await persistDb('comment');
      return HttpResponse.json(result);
    } catch (error: any) {
      return HttpResponse.json(
        { message: error?.message || 'Server Error' },
        { status: 500 },
      );
    }
  }),

  http.delete(
    `${env.API_URL}/comments/:commentId`,
    async ({ params, cookies }) => {
      await networkDelay();

      try {
        const { user, error } = requireAuth(cookies);
        if (error) {
          return HttpResponse.json({ message: error }, { status: 401 });
        }
        const commentId = params.commentId as string;
        const result = db.comment.delete({
          where: { id: { equals: commentId } },
        } as any);
        await persistDb('comment');
        return HttpResponse.json(result);
      } catch (error: any) {
        return HttpResponse.json(
          { message: error?.message || 'Server Error' },
          { status: 500 },
        );
      }
    },
  ),
];
