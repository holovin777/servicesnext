import Head from 'next/head'
import HomeNavBar from '../components/homeNavBar'
import Footer from '../components/footer'

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
        <HomeNavBar siteTitle={site.title} navBarItems={site.items} />
      </main>

      <Footer siteTitle={site.title} />
    </div>
  )
}
