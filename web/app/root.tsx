import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import Layout from "components/layout/Layout";


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

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <ChakraProvider theme={theme}>
        <body>
          <Layout>
            <Outlet />
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
          </Layout>
        </body>
      </ChakraProvider>
    </html>
  );
}
