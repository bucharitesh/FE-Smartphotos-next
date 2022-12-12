import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';

import type { ReactNode } from 'react';
import { Meta } from '@/layouts/Meta';

type IMainProps = {
  title: string;
  description: string;
  children: ReactNode;
  grayBg?: boolean;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    <Meta title={props.title} description={props.description} />
    <Navbar grayBg={props.grayBg} />
    {props.children}
    <Footer />
  </div>
);

export default Main;