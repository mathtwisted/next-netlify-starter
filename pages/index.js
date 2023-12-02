import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>GSRP Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the GSR website!" />
        <p className="description">
          This website is still in the making. In the meanwhile, join our discord! https://discord.gg/ZEbQaJ6Gxr
        </p>
      </main>

      <Footer />
    </div>
  )
}
