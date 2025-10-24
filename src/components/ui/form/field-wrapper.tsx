import * as React from 'react';
import { type FieldError } from 'react-hook-form';

import { Error } from './error';
import { Label } from './label';

type FieldWrapperProps = {
  label?: string;
  className?: string;
  children: React.ReactNode;
  error?: FieldError | undefined;
};

export type FieldWrapperPassThroughProps = Omit<
  FieldWrapperProps,
  'className' | 'children'
>;

export const FieldWrapper = (props: FieldWrapperProps) => {
  const { label, error, children } = props;
  return (
    <div>
      <Label>
        <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
          {label}
        </div>
        <div className="mt-1">{children}</div>
      </Label>
      <Error errorMessage={error?.message} />
    </div>
  );
};
