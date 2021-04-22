import Head from 'next/head';
import { Hero, Header, Posts, Footer } from '../components';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Maneras de no querer a tu hermana</title>
      </Head>

      <Hero />

      <Header />

      <Posts />

      <Footer />
    </div>
  );
}
