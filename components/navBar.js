import NavItem from '../components/navItem.js'
import Link from 'next/link'
import styles from '../styles/NavItem.module.css'

export default function NavBar({title, navItem}) {
  return (
    <div>
      <Link href="/">
        <h3>
          {title}
        </h3>
      </Link>
      <h1 className={styles.navItem}>
        {navItem}
      </h1>
    </div>
  )
}
