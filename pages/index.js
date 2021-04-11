import Head from 'next/head'
import { Hero } from '../components/hero'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Maneras de no querer a tu hermana</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Hero />
        <section className="title-section">
          <h1 className="title">Maneras de no querer a tu hermana</h1>
          <p className="description">
            Un cuento por <a href='_blank'>The New Romantics</a>
          </p>
        </section>
      </header>

      <main>
        <div className="grid">
          <div className="card">
            <h3>Título</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget facilisis dolor. Aliquam a rhoncus metus, vel fringilla ipsum. Donec pulvinar eu sapien nec venenatis. Fusce ornare feugiat odio, vitae sagittis eros fermentum eget. Integer sed dui mi. Nulla a felis suscipit, porttitor dolor et, consectetur dolor. Duis rutrum consequat massa, varius cursus mauris efficitur quis. Integer neque tellus, cursus non tortor eu, volutpat ullamcorper nunc. Suspendisse sollicitudin dui ut elit volutpat, id imperdiet sem porta. Nam vitae neque sed nisi mattis facilisis sit amet in arcu. Ut vestibulum, leo eget auctor feugiat, lectus est tempus libero, quis venenatis metus lorem ac mi. Fusce a ligula vel purus sodales suscipit. Donec sed pretium urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          </div>

          <div className="card">
            <h3>Título</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget facilisis dolor. Aliquam a rhoncus metus, vel fringilla ipsum. Donec pulvinar eu sapien nec venenatis. Fusce ornare feugiat odio, vitae sagittis eros fermentum eget. Integer sed dui mi. Nulla a felis suscipit, porttitor dolor et, consectetur dolor. Duis rutrum consequat massa, varius cursus mauris efficitur quis. Integer neque tellus, cursus non tortor eu, volutpat ullamcorper nunc. Suspendisse sollicitudin dui ut elit volutpat, id imperdiet sem porta. Nam vitae neque sed nisi mattis facilisis sit amet in arcu. Ut vestibulum, leo eget auctor feugiat, lectus est tempus libero, quis venenatis metus lorem ac mi. Fusce a ligula vel purus sodales suscipit. Donec sed pretium urna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
          </div>
        </div>
      </main>

      <footer>Made with ❤️</footer>
    </div>
  )
}
