import Link from 'next/link'
import styles from '../styles/NavItem.module.css'

export default function NavBar({siteTitle, navItem}) {
  return (
    <div>
      <Link href="/">
        <h3>
          <a>{siteTitle}</a>
        </h3>
      </Link>
      <Link href="/">
        <h1 className={styles.navItem}>
          {navItem.charAt(0).toUpperCase() + navItem.slice(1)}
        </h1>
      </Link>
    </div>
  )
}
