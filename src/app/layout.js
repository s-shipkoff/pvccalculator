import './globals.css'
import Header from '../components/Header'

export const metadata = {
  title: 'PVC Calculator',
  description: 'Preservation Trust Company calculator.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <Header />
          <main>{children}</main>
        </div>
      </body>
    </html>
  )
}