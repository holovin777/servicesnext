import NavItem from '../components/NavItem.js'
import Link from 'next/link'

export default function HomeNavBar({title, items}) {
  return (
    <div>
      <Link href="/">
        <h3>
          {title}
        </h3>
      </Link>
      <ul>
        {items.map((item) => (
          <NavItem key={item.id} title={item.title} url={item.url} />
        ))}
      </ul>
    </div>
  )
}
