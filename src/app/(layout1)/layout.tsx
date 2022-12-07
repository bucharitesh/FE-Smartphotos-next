import { Main } from '@/templates/Main';
import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Main title="" description="">
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </Main>
  );
}
