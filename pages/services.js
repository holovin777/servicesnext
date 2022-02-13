import Head from 'next/head'
import HomeButton from '../components/HomeButton.js'

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

export default function Services({site, services}) {
  return (
    <div>
      <Head>
        <title>{site.title} - Services</title>
        <meta name="description" content="{site.title} - Services" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeButton />
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              {service.text}
            </li>
          ))}
        </ul>
      </main>

      <footer>
        {site.title}
      </footer>
    </div>
  )
}
