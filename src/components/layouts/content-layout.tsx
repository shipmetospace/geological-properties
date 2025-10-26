import * as React from 'react';

import { Breadcrumb } from '../ui/breadcrumb';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="mb-4">
        <Breadcrumb />
        <h1 className="text-xl font-bold text-gray-900 dark:text-white">
          {title}
        </h1>
      </div>
      {children}
    </>
  );
};
