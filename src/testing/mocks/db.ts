import { Collection } from '@msw/data';
import z from 'zod';

const user = new Collection({
  schema: z.object({
    id: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string(),
    teamId: z.string(),
    role: z.string(),
    bio: z.string(),
    createdAt: z.number(),
  }),
});

const team = new Collection({
  schema: z.object({
    id: z.string(),
    name: z.string(),
    description: z.string(),
    createdAt: z.number(),
  }),
});

const discussion = new Collection({
  schema: z.object({
    id: z.string(),
    title: z.string(),
    body: z.string(),
    authorId: z.string(),
    teamId: z.string(),
    createdAt: z.number(),
  }),
});

const comment = new Collection({
  schema: z.object({
    id: z.string(),
    body: z.string(),
    authorId: z.string(),
    discussionId: z.string(),
    createdAt: z.number(),
  }),
});

export const db = { user, team, discussion, comment };

export type Model = keyof typeof db;

const dbFilePath = 'mocked-db.json';

export const loadDb = async () => {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { readFile, writeFile } = await import('fs/promises');
    try {
      const data = await readFile(dbFilePath, 'utf8');
      return JSON.parse(data);
    } catch (error: any) {
      if (error?.code === 'ENOENT') {
        const emptyDB = {};
        await writeFile(dbFilePath, JSON.stringify(emptyDB, null, 2));
        return emptyDB;
      } else {
        console.error('Error loading mocked DB:', error);
        return null;
      }
    }
  }
  // If we are running in a browser environment
  return Object.assign(
    JSON.parse(window.localStorage.getItem('msw-db') || '{}'),
  );
};

export const storeDb = async (data: string) => {
  // If we are running in a Node.js environment
  if (typeof window === 'undefined') {
    const { writeFile } = await import('fs/promises');
    await writeFile(dbFilePath, data);
  } else {
    // If we are running in a browser environment
    window.localStorage.setItem('msw-db', data);
  }
};

export const persistDb = async (model: Model) => {
  if (process.env.NODE_ENV === 'test') return;
  const data = await loadDb();
  data[model] = db[model].findMany();
  await storeDb(JSON.stringify(data));
};

export const initializeDb = async () => {
  const database = await loadDb();
  Object.entries(db).forEach(([key, model]) => {
    const dataEntres = database[key];
    if (dataEntres) {
      dataEntres?.forEach((entry: Record<string, any>) => {
        model.create(entry as any);
      });
    }
  });
};

export const resetDb = () => {
  window.localStorage.clear();
};
