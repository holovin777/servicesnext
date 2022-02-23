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
          <li key={item.id}>
            <Link href={item.url}>
              <a><h3>{item.title.charAt(0).toUpperCase() + item.title.slice(1)}</h3></a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
