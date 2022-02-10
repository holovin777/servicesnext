import Head from 'next/head'
import HomeButton from '../components/HomeButton.js'

export async function getStaticProps() {
  const resSite = await fetch(process.env.API_URL)
  const resContacts = await fetch(process.env.API_URL + "contacts")
  const site = await resSite.json()
  const contacts = await resContacts.json()

  return {
    props: {
      site,
      contacts,
    },
  }
}

export default function Contacts({site, contacts}) {
  return (
    <div>
      <Head>
        <title>{site.title} - Contacts</title>
        <meta name="description" content="{site.title} - Contacts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <HomeButton />
        <ul>
          {contacts.map((contact) => (
            <li>
              {contact.text}
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
