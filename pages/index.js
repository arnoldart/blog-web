import Head from 'next/head'
import Profile from '../components/profil'
import Nav from './Components/Nav/Nav'
import {tw} from 'twind'
import Footer from '../components/footer'
import github from './img/github.svg'
import ig from './img/instagram.svg'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Arnold Blog</title>
      </Head>

      <main className={tw `relative`}>
        <Nav />
        <Profile />
      </main>

     <Footer />
      
    </>
  )
}
