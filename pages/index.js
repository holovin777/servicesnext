import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export async function getStaticProps() {
  const res = await fetch('http://127.0.0.1:8000/')
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
        <meta name="description" content="Dottore Link" />
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
