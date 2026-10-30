import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string; // texto acessível (aria-label)
  children: ReactNode;
}

export default function IconButton({ label, children, className = '', ...rest }: IconButtonProps) {
  return (
    <button type="button" className={`icon-btn ${className}`} aria-label={label} title={label} {...rest}>
      {children}
    </button>
  );
}
