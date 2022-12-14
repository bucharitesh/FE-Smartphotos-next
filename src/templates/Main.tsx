import type { ReactNode } from 'react';
import { Meta } from '@/layouts/Meta';

type IMainProps = {
  title: string;
  description: string;
  children: ReactNode;
  keywords?: string;
};

const Main = (props: IMainProps) => (
  <div className="antialiased">
    <Meta title={props.title} description={props.description} keywords={props.keywords || ''} />
    {props.children}
  </div>
);

export { Main };
