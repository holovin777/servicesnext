import NavBar from '../components/navBar'
import Footer from '../components/footer'


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
  const pathName = params.title
  const res = await fetch(process.env.API_URL+pathName)
  const resSite = await fetch(process.env.API_URL)
  const data = await res.json()
  const site = await resSite.json()

  return {
    props: {
      data,
      site,
      pathName
    },
  }
}

export default function Page({data, site, pathName}) {
  return (
    <div>
      <NavBar siteTitle={site.title} navItem={pathName} />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.text}
          </li>
        ))}
      </ul>
      <Footer siteTitle={site.title} />
    </div>
  )
}
