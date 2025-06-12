'use client'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Header.module.css'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.title}>
        <Link href="/" className={styles.logoLink}>
          <div className={styles.logoContainer}>
            <Image 
              src="/logo.png" 
              alt="Logo" 
              fill 
              className={styles.logo}
            />
          </div>
        </Link>
        <span>My Website</span>
      </div>

      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
        <div className={`${styles.bar} ${menuOpen ? styles.open : ''}`}></div>
      </div>

      <nav className={`${styles.nav} ${menuOpen ? styles.showMenu : ''}`}>
        <Link href="/">Home</Link>
        <Link href="/calculator">Calculator</Link>
        <a href="https://preservationtrustcompany.com/" target="_blank" rel="noopener noreferrer">
          Preservation Trust Company
        </a>
      </nav>
    </header>
  )
}
