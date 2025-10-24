import { Link, useSearchParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Form, Input } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useLogin, loginInputSchema } from '@/lib/auth';

type ForgotPasswordFormProps = {
  onSuccess: () => void;
};

export const ForgotPasswordForm = ({ onSuccess }: ForgotPasswordFormProps) => {
  const login = useLogin({
    onSuccess,
  });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <>
      <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Forgot Password
      </h1>
      <p className=" text-gray-500 dark:text-gray-400">
        We’ll email you instructions to reset your password. If you don’t have
        access to your email anymore, you can try{' '}
        <a
          className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
          href="#"
        >
          account recovery
        </a>
        .
      </p>
      <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
        <Form
          onSubmit={(values) => {
            login.mutate(values);
          }}
          schema={loginInputSchema}
        >
          {({ register, formState }) => (
            <>
              <div className="grid gap-4 sm:grid-cols-1 sm:gap-6">
                <Input
                  type="email"
                  label="Email Address"
                  error={formState.errors['email']}
                  registration={register('email')}
                />
              </div>
              <div className="flex items-center justify-between">
                <Link
                  to={paths.auth.login.getHref(redirectTo)}
                  className="text-sm font-medium text-primary hover:underline dark:text-primary-foreground"
                >
                  Back to login
                </Link>
              </div>
              <Button
                isLoading={login.isPending}
                type="submit"
                className="w-full"
              >
                Reset password
              </Button>
            </>
          )}
        </Form>
      </div>
    </>
  );
};
