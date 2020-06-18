import Head from 'next/head';
import { ReactNode } from 'react';

type LayoutType = {
  children?: ReactNode;
  style?: object;
  className?: string;
};

const Layout = (props: LayoutType) => (
  <div
    className={`${props.className} d-flex flex-column justify-content-center align-items-center text-center`}
    style={{ ...props.style }}
  >
    <Head>
      <title>Color viewer</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.0/cosmo/bootstrap.min.css"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap"
        rel="stylesheet"
      />
    </Head>
    {props.children}

    <style jsx>{`
      * {
        font-family: Fira Sans !important;
      }
    `}</style>
  </div>
);

export default Layout;
