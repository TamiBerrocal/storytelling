import Head from 'next/head';
import { Navigation, FixedFooter } from '../components';

export default function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Maneras de no querer a tu hermana</title>
        </Head>
      </div>

      <Navigation />

      <FixedFooter />
    </>
  );
}
