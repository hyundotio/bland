import  './global.css';

export const metadata = {
  icons: {
    icon: [
      {
        url: '/bland.png',
      }
    ]
  },
  title: 'Bland Corporation',
  description: 'Made by Bland Corporation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="html">
      <body className="body">{children}</body>
    </html>
  )
}
