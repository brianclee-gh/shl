import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/navbar/Navbar'

import airBnbBG from '../public/airBnbBG.jpg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>SHL</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.splash}>
          <Image src={airBnbBG} />
          <div className={styles.centerText}>
            <p className={styles.text}>Not sure where to go? Perfect.</p>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}