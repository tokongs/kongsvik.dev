import Head from "next/head"; import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider >
        <Head>
          <link rel="shortcut icon" href="/public/favicon.ico" />
        </Head>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App
