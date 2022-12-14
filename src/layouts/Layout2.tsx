import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
        <Navbar grayBg />
        {children}
        <Footer />
    </>
  );
}
