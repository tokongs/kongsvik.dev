import Head from "next/head"; import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import Layout from "../components/layout/Layout";
import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    accent_pink: {
      100: "#EF476F",
    },
    accent_yellow: {
      100: "#FFD166"
    },
    accent_green: {
      100: "#06D6A0"
    },
    accent_blue: {
      100: "#118AB2",
      200: "#073B4C"
    }
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Roboto', sans-serif`,
  },
  styles: {
    global: {
      body: {
        backgroundColor: "accent_yellow.100",
      }
    }
  }
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
