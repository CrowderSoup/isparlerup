import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is Parler Up?</title>
        <link rel="icon" href="/favicon.ico" />
        <script type="text/javascript" src="/matomo.js"></script>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          No
        </h1>
      </main>

      <footer className={styles.footer}>
        This website is is no way associated with Parler and is in fact a joke at their expense.
      </footer>
    </div>
  )
}
