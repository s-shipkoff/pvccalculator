import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '3rem' }}>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for does not exist.</p>
      <p><Link href="/">Return to Home</Link></p>
    </div>
  )
}