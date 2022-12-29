import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { Providers } from './theme-provider'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html>
      <head>
      <script src="https://unpkg.com/flowbite@1.5.3/dist/datepicker.js"></script>
      </head>
      <body>
      <Providers>{children}</Providers>
      </body>
    </html>
  )
}
