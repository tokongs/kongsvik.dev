import Head from "next/head"; import type { AppProps } from 'next/app'
import { ChakraProvider, transition } from '@chakra-ui/react';
import Layout from "../components/layout/Layout";
import { extendTheme } from '@chakra-ui/react'
import { NextPage } from "next";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useRouter } from "next/router";

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
        <Layout>
            <Component {...pageProps} />
        </Layout>
    </ChakraProvider>
  )
}

export default App
