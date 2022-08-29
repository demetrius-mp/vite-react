import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { z } from 'zod';

import Input from '@/components/Input';

const signUpSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match.',
  path: ['confirmPassword'],
});

type FormData = z.infer<typeof signUpSchema>;

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = handleSubmit(async (data) => {
    // eslint-disable-next-line no-alert
    alert(JSON.stringify(data));
  });

  return (
    <div className="card card-body bg-base-200 shadow-lg p-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold">Sign up</h1>
        <span className="text-sm opacity-50">
          Already have an account?
          {' '}
          <Link className="link" to="/sign-in">Sign in</Link>
        </span>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <Input register={register} name="name" errorField="name" label="Name" type="text" errors={errors} required minLength={3} />
        <Input register={register} name="email" errorField="email" label="Email" type="email" errors={errors} required />
        <Input register={register} name="password" errorField="password" label="Password" type="password" errors={errors} required minLength={8} />
        <Input register={register} name="confirmPassword" errorField="confirmPassword" label="Confirm password" type="password" errors={errors} required />

        <button
          type="submit"
          className={clsx(
            'btn btn-secondary btn-outline mt-3',
            (isSubmitting || isValidating) && 'loading',
          )}
        >
          sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
