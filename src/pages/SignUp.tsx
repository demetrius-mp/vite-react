import { zodResolver } from '@hookform/resolvers/zod';
import clsx from 'clsx';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const signUpSchema = z.object({
  name: z.string().min(8),
  email: z.string().email(),
  password: z.string().min(8),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: 'Passwords must match.',
  path: ['confirmPassword'],
});

type FormData = z.infer<typeof signUpSchema>;

const InputError: React.FC<React.PropsWithChildren> = ({ children }) => (children ? (
  <span className="label">
    <span className="label-text-alt">
      {children}
    </span>
  </span>
) : null);

const SignUp: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = handleSubmit((data) => {
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
          <a className="link" href="/sign-in">Sign in</a>
        </span>
      </div>

      <form onSubmit={onSubmit} className="flex flex-col gap-3">
        <div className="form-control w-full">
          <label htmlFor="name" className="label">
            <span className="label-text flex gap-1">
              Name
              <span className="text-error">
                *
              </span>
            </span>
          </label>
          <input
            {...register('name')}
            type="text"
            required
            min={3}
            id="name"
            name="name"
            className={clsx(
              'input input-bordered',
              errors?.name?.message && 'input-error',
            )}
          />
          <InputError>
            {errors?.name?.message}
          </InputError>
        </div>

        <div className="form-control w-full">
          <label htmlFor="email" className="label">
            <span className="label-text flex gap-1">
              Email
              <span className="text-error">
                *
              </span>
            </span>
          </label>
          <input type="email" required className="input input-bordered" id="email" name="email" />
        </div>

        <div className="form-control w-full">
          <label htmlFor="password" className="label">
            <span className="label-text flex gap-1">
              Password
              <span className="text-error">
                *
              </span>
            </span>
          </label>
          <input type="password" required min={8} className="input input-bordered" id="password" name="password" />
        </div>

        <div className="form-control w-full">
          <label htmlFor="confirmPassword" className="label">
            <span className="label-text flex gap-1">
              Confirm password
              <span className="text-error">
                *
              </span>
            </span>
          </label>
          <input type="password" required min={8} className="input input-bordered" id="confirmPassword" name="confirmPassword" />
        </div>

        <button type="submit" className="btn btn-secondary btn-outline mt-3">
          sign up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
