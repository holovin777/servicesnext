import Head from 'next/head'
import NavBar from '../components/NavBar.js'

export async function getStaticProps() {
  const resSite = await fetch(process.env.API_URL)
  const resServices = await fetch(process.env.API_URL + "services")
  const site = await resSite.json()
  const services = await resServices.json()

  return {
    props: {
      site,
      services,
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
        <NavBar title={site.title} items={site.items} />
      </main>

      <footer>
        {site.title}
      </footer>
    </div>
  )
}
