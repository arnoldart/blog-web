import Head from 'next/head'
import Nav from './Composition/Nav/NavBlog'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Arnold Blog</title>
      </Head>

      <main>

        <Nav />

      </main>
    </>
  )
}