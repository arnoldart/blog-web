import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'
import { getSortedPostsData } from '../lib/blog'
import Link from 'next/link'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({ allPostsData }) {
  return (
    <>
      <Head>
        <title>Blog | Arnold Blog</title>
      </Head>

      <Nav />

      <main className={tw `flex flex-col min-h-screen`}>
        
        <div className={tw `flex-1`}>
          <div className={tw `container`}>
            <div className={tw `mx-6 text-white`}>
              <ul className={tw `flex justify-evenly flex-col lg:flex-row`}>
                {allPostsData.map(({ id, date, title }) => (
                  <Link href={`/posts/blog/${id}`} key={id}>
                 <div className={tw `border border-white w-72`}>
                  <li className={tw `cursor-pointer`}>
                    <p>{title}</p>
                    <p>{date}</p>
                  </li>
                 </div>
                </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={tw `mt-10`}>
          <Footer />
        </div>
      </main>

    </>
  )
}
