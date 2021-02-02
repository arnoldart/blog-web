import Head from 'next/head'
import Nav from './Composition/Nav/NavIndex'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Arnold Blog</title>
      </Head>

      <main>
      
        <Nav />
      </main>
    </>
  )
}
