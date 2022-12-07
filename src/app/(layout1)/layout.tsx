import { Main } from '@/templates/Main';
import Layout from '@/components/organisms/home/Layout';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Main title="" description="">
      <Layout>{children}</Layout>
    </Main>
  );
}
