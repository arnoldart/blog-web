import Head from 'next/head'
import Nav from './Composition/Nav/NavProject'

export default function project() {
  return (
    <>
      <Head>
        <title>Project | Arnold Blog</title>
      </Head>

      <main>
        <Nav />
      </main>
    </> 
  )
}