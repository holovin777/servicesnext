import Link from 'next/link'

export default function NavItem({title, url}) {
  return (
    <div>
      <Link href={url}>
        <a><h3>{title}</h3></a>
      </Link>
    </div>
  )
}
