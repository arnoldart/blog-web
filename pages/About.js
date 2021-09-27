import Head from 'next/head'
import Nav from '../Components/Nav'
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

      <main className="flex flex-col min-h-screen">
        
        <div className="flex-1">

        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </main>

    </>
  )
}
