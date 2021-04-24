import Head from 'next/head';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Maneras de no querer a tu hermana</title>
      </Head>

      <div>
        <img src="juliamood.jpg" className="moodboard" />
        <img src="astridmood.jpg" className="moodboard" />
        <img src="julia-1.jpg" className="moodboard" />
        <img src="astrid-1.jpg" className="moodboard" />
        <img src="paleta-colores.png" className="palette" />
      </div>
    </div>
  );
}
