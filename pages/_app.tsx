import { AppProps } from "next/app";
import Layout from "@/components/layouts/layout";
import { Inter } from "next/font/google";

const inter = Inter({subsets: ['latin']})

const App = ({Component, pageProps}: AppProps) => (
  <>
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