import clsx from 'clsx';
import { FieldErrorsImpl, Path, UseFormRegister } from 'react-hook-form';

interface InputProps<T> extends React.ComponentPropsWithoutRef<'input'> {
  register: UseFormRegister<T>;
  errors: FieldErrorsImpl<T>;
  errorField: keyof FieldErrorsImpl<T>;
  name: Path<T>;
  label: string;
}

const InputError: React.FC<React.PropsWithChildren> = ({ children }) => (children ? (
  <span className="label">
    <span className="label-text-alt">
      {children}
    </span>
  </span>
) : null);

const Input = <T extends unknown>({
  register, name, errors, errorField, label, required, ...rest
}: InputProps<T>) => {
  const error = errors?.[errorField]?.message;

  return (
    <div className="form-control w-full">
      <label htmlFor={name} className="label">
        <span className="label-text flex gap-1">
          {label}
          {required && <span className="text-error">*</span>}
        </span>
      </label>
      <input
        {...register(name)}
        type="text"
        required
        min={3}
        id={name}
        name={name}
        className={clsx(
          'input input-bordered',
          error && 'input-error',
        )}
        {...rest}
      />
      <InputError>
        {error?.toString()}
      </InputError>
    </div>
  );
};

export default Input;
