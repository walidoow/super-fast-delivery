import { AppProps } from "next/app";
import Layout from "@/components/layouts/layout";
import { Inter } from "next/font/google";
import Head from 'next/head';

const inter = Inter({subsets: ['latin']})

const App = ({Component, pageProps}: AppProps) => (
  <><link
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
  rel="stylesheet"
/>
    <style jsx global>{`
      html {
        font-family: ${inter.style.fontFamily};
      }
    `}</style>
    <Layout>
      <Component {...pageProps}/>
    </Layout>
  </>
)

export default App;