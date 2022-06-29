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

export type NextPageWithColor = NextPage & {
  getBackgroundColor?: () => string
}

type AppPropsWithColor = AppProps & {
  Component: NextPageWithColor
}

const App = ({ Component, pageProps }: AppPropsWithColor) => {
  const route = useRouter()
  const controls = useAnimation()
  useEffect(() => {

    controls.start({
      backgroundColor: (Component.getBackgroundColor && Component.getBackgroundColor()) || "#FFF",
      transition: { duration: 0.5 }
    })
  }, [Component])
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Kongsvik</title>
        <meta name="description" content="Landing page for Tobias Slettemoen Kongsvik" />
        <link rel="shortcut icon" href="/public/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main animate={controls} >
        <Layout>
          <AnimatePresence exitBeforeEnter initial={false}>
            <Component {...pageProps} key={route.route} />
          </AnimatePresence>
        </Layout>
      </motion.main>
    </ChakraProvider>
  )
}

export default App
