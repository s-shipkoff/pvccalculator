export const metadata = {
    title: 'Calculator',
    description: 'Tax calculator',
}

import styles from './calculator.module.css'

export default function CalculatorPage() {
  return (
    <div className={styles.container}>
      <h2>Calculator</h2>
      <p>This is the future calculator page.</p>
    </div>
  )
}