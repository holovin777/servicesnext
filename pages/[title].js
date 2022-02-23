import NavBar from '../components/navBar'

export async function getStaticPaths() {
  const res = await fetch(process.env.API_URL)
  const pages = await res.json()
  const paths = pages.items.map((page) => ({
    params: { title: page.title.toString() },
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const rout = params.title
  const res = await fetch(process.env.API_URL+rout)
  const resSite = await fetch(process.env.API_URL)
  const data = await res.json()
  const site = await resSite.json()

  return {
    props: {
      data,
      site,
      rout
    },
  }
}

export default function Page({data, site, rout}) {
  return (
    <div>
      <NavBar siteTitle={site.title} navItem={rout} />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  )
}
