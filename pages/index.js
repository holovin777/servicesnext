import Head from 'next/head'
import Navbar from '../components/Navbar.js'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch(process.env.API_URL)
  const site = await res.json()

  return {
    props: {
      site,
    },
  }
}

export default function Home({site}) {
  return (
    <div>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar title={site.title} />
        <Link href="/services">
          <a>Services</a>
        </Link>
      </main>

      <footer>
        {site.title}
      </footer>
    </div>
  )
}
