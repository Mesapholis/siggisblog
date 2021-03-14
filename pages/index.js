import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Tile from '../components/tile.js'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Siggi's Blog</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Siggi's Blog
        </h1>

        <p className={styles.description}>
          My evolving portfolio, created by{' '}
          <code className={styles.code}>learning</code>
        </p>

        <div className="gridContainer">
          <div><Tile></Tile><Tile></Tile><Tile></Tile></div>
          <div><Tile></Tile></div>
          <div><Tile></Tile><Tile></Tile></div>
          <div><Tile></Tile><Tile></Tile><Tile></Tile><Tile></Tile></div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
