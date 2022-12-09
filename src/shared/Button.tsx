import React from 'react';

const Button = ({
  children,
  className = '',
  onClick = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-xl bg-brand_blue_1 px-10 py-2 font-gilroy font-bold text-brand_white shadow-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
