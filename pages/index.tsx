import Head from "next/head"
import Image from "next/image"
import type { CSSProperties } from "react"
import logo from "../public/logo.144.png"

type CSS = {
  full: CSSProperties
  message: CSSProperties
  logo: CSSProperties
}

export default function Home() {
  const styles: CSS = {
    full: {
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",
      color: "white",
      backgroundColor: "#148AFD",
    },
    message: {
      padding: "1rem",
    },
    logo: {
      textAlign: "center",
    },
  }

  return (
    <main style={styles.full}>
      <Head>
        <title>Chanson du fenua - Page de maintenance</title>
        <meta name="theme-color" content="#148AFD" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#148AFD" />
      </Head>

      <div>
        <div style={styles.logo}>
          <Image src={logo} alt="Logo de chanson du fenua." />
        </div>
        <p style={styles.message}>
          Chanson du fenua est actuelement en maintenance pendant environ 6 mois à compter du 10 décembre 2022. Vous pouvez nous contacter par messagerie électronique{" "}
          <a style={{color: "black"}} href="mailto:contact@rao-nagos.pf">ici</a>.
        </p>
      </div>
    </main>
  )
}
