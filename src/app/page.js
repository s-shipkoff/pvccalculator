'use client'
import Link from 'next/link'
import styles from './home.module.css'

export default function HomePage() {
  return (
    <div className={styles.center}>
      <h2 className={styles.h2}>Features:</h2>
      <nav className={styles.nav}>
        <Link href='/income'>Income Tax Calculator</Link>
        <Link href='/distribution'>Trust Distribution Calculator</Link>
      </nav>
    </div>
  )
}
