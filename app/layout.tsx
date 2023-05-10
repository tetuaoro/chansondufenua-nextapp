import "../styles/globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <title>Chanson du fenua - Page de maintenance</title>
        <meta name="theme-color" content="#148AFD" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#148AFD" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon.32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon.16.png" />
        <link rel="icon" type="image/x-icon" href="/icons/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
