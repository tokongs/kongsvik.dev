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
import { StructuredData } from "remix-utils"

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
      "p, li": {
        fontSize: "lg",
      }
    }
  }
})

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
        <StructuredData />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-97NCV1GDZK"
        />
        <script
          async
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-97NCV1GDZK', {
                  page_path: window.location.pathname,
                });
              `
          }}
        />
      </head>
      <ChakraProvider theme={theme}>
        <body>
          <Layout>
            <Outlet />
          </Layout>
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </body>
      </ChakraProvider>
    </html>
  );
}
