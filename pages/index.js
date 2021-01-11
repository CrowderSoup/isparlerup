import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Is Parler Up?</title>
        <link rel="icon" href="/favicon.ico" />

        <!-- Matomo -->
        <script type="text/javascript">
          var _paq = window._paq = window._paq || [];
          /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
          _paq.push(['trackPageView']);
          _paq.push(['enableLinkTracking']);
          (function() {
            var u="//cloud.bsdrocker.com/stats/";
            _paq.push(['setTrackerUrl', u+'matomo.php']);
            _paq.push(['setSiteId', '3']);
            var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
            g.type='text/javascript'; g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
          })();
        </script>
        <!-- End Matomo Code -->
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
