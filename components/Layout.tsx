import Head from 'next/head';

const Layout = (props: { children: JSX.Element[] | JSX.Element }) => (
  <div
    className="container d-flex flex-column justify-content-center align-items-center mt-4 text-center"
    style={{ height: '75vh' }}
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
