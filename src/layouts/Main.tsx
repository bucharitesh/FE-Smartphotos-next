import Navbar from '@/shared/Navbar';
import Footer from '@/shared/Footer';

import type { ReactNode } from 'react';
import { Meta } from '@/layouts/Meta';
import SmoothScroll from './SmoothScroll';

type IMainProps = {
  title: string;
  description: string;
  children: ReactNode;
  grayBg?: boolean;
};

const Main = (props: IMainProps) => (
    <SmoothScroll>
      <Meta title={props.title} description={props.description} />
      <Navbar grayBg={props.grayBg} />
      {props.children}
      <Footer />
    </SmoothScroll>
);

export default Main;