import Head from 'next/head'
import NavBar from '../components/navBar'
import Footer from '../components/footer'
import styles from '../styles/Services.module.css'

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
        <NavBar title={site.title} navItem="Services" />
        <ul className={styles.services}>
          {services.map((service) => (
            <li key={service.id}>
              <h4>{service.text}</h4>
            </li>
          ))}
        </ul>
      </main>

      <Footer siteTitle={site.title} />
    </div>
  )
}
