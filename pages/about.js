import Head from 'next/head'
import Nav from './Composition/Nav/NavAbout'

export default function Blog() {
  return (
    <>
      <Head>
        <title>About | Arnold Blog</title>
      </Head>

      <main>

        <Nav />

      </main>
    </>
  )
}