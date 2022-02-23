import Link from 'next/link'
import styles from '../styles/NavBarItems.module.css'

export default function HomeNavBar({siteTitle, navBarItems}) {
  return (
    <div>
      <Link href="/">
        <h3>
          <a>{siteTitle}</a>
        </h3>
      </Link>
      <ul className={styles.navBarItems}>
        {navBarItems.map((item) => (
          <Link href={item.url}>
            <li key={item.id}><a><h3>{item.title}</h3></a></li>
          </Link>
        ))}
      </ul>
    </div>
  )
}
