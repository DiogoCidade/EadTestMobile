import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: ReactNode;
}

export default function Button({ variant = 'primary', icon, children, className = '', ...rest }: ButtonProps) {
  return (
    <button type="button" className={`btn btn-${variant} ${className}`} {...rest}>
      {icon}
      {children && <span>{children}</span>}
    </button>
  );
}
