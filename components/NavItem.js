import Link from 'next/link'

export default function NavItem({title, url}) {
  return (
    <div>
      <Link href={url}>
        <a>{title}</a>
      </Link>
    </div>
  )
}
