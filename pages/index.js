import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

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
    <div className={styles.container}>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {site.title}
        </h1>
      </main>


      <footer className={styles.footer}>
        {site.title}
      </footer>
    </div>
  )
}
