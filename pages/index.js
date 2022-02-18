import Head from 'next/head'
import HomeNavBar from '../components/HomeNavBar.js'

export async function getStaticProps() {
  const resSite = await fetch(process.env.API_URL)
  const site = await resSite.json()

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
        <HomeNavBar title={site.title} items={site.items} />
      </main>

      <footer>
        {site.title}
      </footer>
    </div>
  )
}
