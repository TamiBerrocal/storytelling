import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <>
      <div className="container">
        <Head>
          <title>Maneras de no querer a tu hermana</title>
        </Head>

        <div className="row-container">
          <div className="column-container pink-background">
            <header>
              <Link href="/julia">
                <a>
                  <h2 className="pink-text-shadow">Julia</h2>
                </a>
              </Link>
            </header>
          </div>
          <div className="column-container green-background">
            <header>
              <Link href="/astrid">
                <a>
                  <h2 className="green-text-shadow">Astrid</h2>
                </a>
              </Link>
            </header>
          </div>
        </div>
        <div className="fixed-footer">
          <Link href="/story">
            <a>
              <h3>
                Maneras de no querer
                <br />
                a tu hermana
              </h3>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
