import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'classnames';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
}

const baseClasses =
  'inline-flex items-center justify-center rounded-md font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50';

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-gold text-primary hover:bg-gold-light',
  secondary: 'border border-gold text-gold hover:bg-gold/10',
  ghost: 'text-neutral-900 hover:bg-neutral-100'
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-base',
  lg: 'h-13 px-8 text-lg'
};

export function Button({
  variant = 'primary',
  size = 'md',
  loading,
  fullWidth,
  iconLeft,
  iconRight,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={clsx(
        baseClasses,
        variantClasses[variant],
        sizeClasses[size],
        fullWidth && 'w-full',
        className
      )}
      aria-disabled={loading || props.disabled}
      {...props}
    >
      {loading && (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-neutral-200 border-t-gold" />
      )}
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
      <span>{children}</span>
      {iconRight && <span className="ml-2">{iconRight}</span>}
    </button>
  );
}

