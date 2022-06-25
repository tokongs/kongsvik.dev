import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kongsvik</title>
        <meta name="description" content="Landing page for Tobias Slettemoen Kongsvik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Hello there!</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home
