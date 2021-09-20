import Head from 'next/head'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'

export default function About() {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="about page"/>
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
