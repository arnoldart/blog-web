import Head from 'next/head'
import Profile from '../components/profil'
import Nav from './Components/Nav/Nav'
import {tw} from 'twind'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Arnold Blog</title>
      </Head>

      <main>
        <Nav />
        <Profile />
      </main>
    </>
  )
}
