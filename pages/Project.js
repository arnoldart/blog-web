import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'

export default function Project() {
  return (
    <>
      <Head>
        <title>Project | Arnold Blog</title>
      </Head>

      <main className={tw ``}>
        <Nav />
        <div className={tw `static`}>
          <Footer />
        </div>
      </main>

    </>
  )
}
