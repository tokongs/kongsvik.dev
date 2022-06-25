import Head from "next/head"; import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "../components/layout/Layout";
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
})

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Kongsvik</title>
        <meta name="description" content="Landing page for Tobias Slettemoen Kongsvik" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </main>
    </ChakraProvider>
  )
}

export default App
