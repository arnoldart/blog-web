import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <title>About | Arnold Blog</title>
      </Head>

      <Nav />

      <main className={tw `flex flex-col min-h-screen`}>
        
        <div className={tw `flex-1`}>

        </div>

        <div className={tw `mt-10`}>
          <Footer />
        </div>
      </main>

    </>
  )
}
