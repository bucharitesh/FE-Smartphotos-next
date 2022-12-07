import Footer from '@/components/atoms/Footer';
import Navbar from '@/components/atoms/Navbar';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
