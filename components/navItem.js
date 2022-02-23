import Link from 'next/link'

export default function NavItem({id, title, url}) {
  return (
    <div>
      <Link href={url}>
        <li key={id}><a><h3>{title}</h3></a></li>
      </Link>
    </div>
  )
}
