import Link from 'next/link'
import styles from '../styles/Footer.module.css'

export default function Footer({siteTitle}) {
  return (
    <div className={styles.footer}>
      <Link href="/">
        <a>{siteTitle}</a>
      </Link>
    </div>
  )
}
