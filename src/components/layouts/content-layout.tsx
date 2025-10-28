import * as React from 'react';

import { Breadcrumb } from '../ui/breadcrumb';

type ContentLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const ContentLayout = ({ children, title }: ContentLayoutProps) => {
  return (
    <>
      <div className="flex flex-col m-4 gap-4">
        <Breadcrumb />
      </div>
      {children}
    </>
  );
};
