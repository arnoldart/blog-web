import Head from 'next/head'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Project({allPostsData}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="project page"/>
        <title>Project | Arnold Blog</title>
      </Head>

      <Nav />
      <main className="flex flex-col min-h-screen">
        
        <div className="flex-1">
          <div className="container">
            <div className="mx-6 text-white">

            </div>
          </div>
        </div>

        <div className="mt-10">
          <Footer />
        </div>
      </main>

    </>
  )
}
