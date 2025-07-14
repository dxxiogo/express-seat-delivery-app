'use client';

import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type RedButtonProps = {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  loading?: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const RedButton = ({ 
  children = 'Entrar', 
  onClick, 
  disabled = false,
  loading = false,
  type = 'button',
  className = '',
  ...props 
}: RedButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`
        w-full px-6 py-3 
        bg-red-600 hover:bg-red-700 
        active:bg-red-800 
        disabled:bg-red-400 disabled:cursor-not-allowed
        text-white font-medium text-sm
        rounded-lg
        transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
        shadow-sm hover:shadow-md
        ${loading ? 'cursor-wait' : ''}
        ${className}
      `}
      {...props}
    >
      {loading ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
          Carregando...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default RedButton;