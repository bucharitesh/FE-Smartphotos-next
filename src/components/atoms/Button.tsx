import React from 'react';

const Button = ({ children }: { children: React.ReactNode }) => {
  return <button className='bg-brand_blue_1 text-brand_white px-10 py-2 rounded-xl font-gilroy shadow-xl'>{children}</button>;
};

export default Button;
