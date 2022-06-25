import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Kongsvik</title>
        <meta name="description" content="Landing page for Tobias Slettemoen Kongsvik" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="">Hello there!</h1>
      </main>
    </>
  )
}

export default Home
