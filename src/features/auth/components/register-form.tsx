import * as React from 'react';
import { Link, useSearchParams } from 'react-router';

import { Button } from '@/components/ui/button';
import { Form, Input, Select, Label, Switch } from '@/components/ui/form';
import { paths } from '@/config/paths';
import { useRegister, registerInputSchema } from '@/lib/auth';
import { Team } from '@/types/api';

type RegisterFormProps = {
  onSuccess: () => void;
  chooseTeam: boolean;
  setChooseTeam: () => void;
  teams?: Team[];
};

export const RegisterForm = ({
  onSuccess,
  chooseTeam,
  setChooseTeam,
  teams,
}: RegisterFormProps) => {
  const registering = useRegister({ onSuccess });
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <div>
      <h1 className="mb-2 text-2xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
        Register your account
      </h1>
      <p className=" text-gray-500 dark:text-gray-400">
        Already have an account?{' '}
        <Link
          className="font-medium text-primary hover:underline dark:text-blue-500"
          to={paths.auth.login.getHref(redirectTo)}
        >
          Log in
        </Link>
      </p>
      <div className="mt-4 space-y-4 sm:mt-6 sm:space-y-6">
        <Form
          onSubmit={(values) => {
            registering.mutate(values);
          }}
          schema={registerInputSchema}
          options={{
            shouldUnregister: true,
          }}
        >
          {({ register, formState }) => (
            <>
              <Input
                type="text"
                label="First Name"
                error={formState.errors['firstName']}
                registration={register('firstName')}
              />
              <Input
                type="text"
                label="Last Name"
                error={formState.errors['lastName']}
                registration={register('lastName')}
              />
              <Input
                type="email"
                label="Email Address"
                error={formState.errors['email']}
                registration={register('email')}
              />
              <Input
                type="password"
                label="Password"
                error={formState.errors['password']}
                registration={register('password')}
              />

              <div className="flex items-center space-x-2">
                <Switch
                  checked={chooseTeam}
                  onCheckedChange={setChooseTeam}
                  className={`${
                    chooseTeam ? 'bg-blue-600' : 'bg-gray-200'
                  } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2`}
                  id="choose-team"
                />
                <Label
                  htmlFor="choose-team"
                  className="text-gray-900 dark:text-white"
                >
                  Join Existing Team
                </Label>
              </div>

              {chooseTeam && teams ? (
                <Select
                  label="Team"
                  error={formState.errors['teamId']}
                  registration={register('teamId')}
                  options={teams?.map((team) => ({
                    label: team.name,
                    value: team.id,
                  }))}
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                />
              ) : (
                <Input
                  type="text"
                  label="Team"
                  error={formState.errors['teamName']}
                  registration={register('teamName')}
                />
              )}
              <div>
                <Button
                  isLoading={registering.isPending}
                  type="submit"
                  className="w-full"
                >
                  Register
                </Button>
              </div>
            </>
          )}
        </Form>
      </div>
    </div>
  );
};
