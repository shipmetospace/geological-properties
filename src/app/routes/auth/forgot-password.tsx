import { useNavigate, useSearchParams } from 'react-router';

import { paths } from '@/config/paths';
import { ForgotPasswordForm } from '@/features/auth/components/forgot-password-form';
import { AuthLayout } from '@/components/layouts/auth-layout';

const ForgotPasswordRoute = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  return (
    <AuthLayout title="Log in to your account">
      <ForgotPasswordForm
        onSuccess={() => {
          navigate(
            `${redirectTo ? `${redirectTo}` : paths.auth.login.getHref()}`,
            {
              replace: true,
            },
          );
        }}
      />
    </AuthLayout>
  );
};

export default ForgotPasswordRoute;
