'use client'
import Link from 'next/link'
import styles from './home.module.css'

export default function HomePage() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.headerSection}>
        <h1 className={styles.title}>Preservation Trust Company Calculator</h1>
        <p className={styles.description}>
          Welcome! Navigate to one of the following pages to begin.
        </p>
      </div>
      <nav className={styles.linkContainer}>
        <Link className={styles.link} href='/income'>Income Tax Calculator</Link>
        <Link className={styles.link} href='/distribution'>Trust Distribution Calculator</Link>
      </nav>
    </div>
  )
}
