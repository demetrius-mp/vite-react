import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import Input from '@/components/Input';

const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

type FormData = z.infer<typeof signInSchema>;

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<FormData>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  });

  return (
    <div className="card card-body bg-base-200 shadow-lg p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Sign in</h1>
        <span className="text-sm opacity-50">
          Don&apos;t have an account?
          {' '}
          <Link className="link" to="/sign-up">Sign up</Link>
        </span>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input register={register} name="email" errorField="email" label="Email" type="email" errors={errors} required />
        <Input register={register} name="password" errorField="password" label="Password" type="password" errors={errors} required minLength={8} />

        <button
          type="submit"
          className={clsx(
            'btn btn-secondary btn-outline mt-3',
            (isSubmitting || isValidating) && 'loading',
          )}
        >
          sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;
