import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Maneras de no querer a tu hermana</title>
      </Head>

      <div className="header">
        <img src="juliamood.jpg" className="moodboard" />
        <img src="astridmood.jpg" className="moodboard" />
      </div>
    </div>
  );
}
