import Layout from '../components/Layout';
import Link from 'next/link';

const IndexPage = () => (
  <Layout style={{ height: '75vh' }} className="container mt-4">
    <div style={{ padding: '50px 0' }}>
      <h1 className="title my-0">Welcome to Color View!</h1>
      <p className="desc mb-5 mt-3">What do you want to do?</p>

      <div className="btn--container">
        <Link href="/colorname">
          <button className="btn btn-primary">Get some color name</button>
        </Link>

        <Link href="/random">
          <button className="btn btn-primary">Get some random color</button>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;

/*
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}*/
