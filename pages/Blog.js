import Head from 'next/head'
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
              <ul className={tw `flex justify-center items-center flex-col lg:flex-row lg:justify-evenly lg:items-stretch`}>
                {allPostsData.map(({ id, date, title }) => (
                  <a href={`/posts/blog/${id}`} key={id}>
                  <div className={tw `border border-white w-72 my-2 p-5 rounded-md`}>
                    <li className={tw `cursor-pointer`}>
                      <p className={tw `text-xs text-gray-400`}>{date}</p>
                      <p className={tw `mt-1`}>{title}</p>
                    </li>
                  </div>
                </a>
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
