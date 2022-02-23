import NavItem from '../components/navItem.js'
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
          <NavItem key={item.id} title={item.title} url={item.url} />
        ))}
      </ul>
    </div>
  )
}
