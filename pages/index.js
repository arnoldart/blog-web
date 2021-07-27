import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'

// Images
import ProfilePc from '../public/img/profil.png'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Arnold Blog</title>
      </Head>

      <Nav />

      <main className={tw `md:static`}>
        <div className={tw `mx-6 xl:mx-32 bg-gray-700 rounded-lg mt-7`}>
          <div className={tw `flex flex-col lg:flex-row items-center p-6`}>
            <div>
              <Image src={ProfilePc} alt="test"/>
            </div>
            <div className={tw `text-white text-center lg:text-left mt-10 lg:mt-0`}>
              <p className={tw `font-bold text-3xl lg:text-3xl`}>Halo semua perkenalkan saya Arnold</p>
              <p className={tw `mt-3`}>Seorang Junior Front End Developer, saya juga membagikan tips tips dan project sekaligus dengan source code nya.Seorang Junior Front End Developer, saya juga membagikan tips tips dan project sekaligus dengan source code nya.</p>
            </div>
          </div>
        </div>
        <footer className={tw `md:absolute bottom-0 w-full mt-10`}>
          <Footer />
        </footer>
      </main>


    </>
  )
}
