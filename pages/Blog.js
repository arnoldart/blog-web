import Head from 'next/head'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'
import { getSortedPostsData } from '../lib/blog'
import { MdDateRange } from 'react-icons/md'
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="blog page"/>
        <title>Blog | Arnold Blog</title>
      </Head>

      <Nav />

      <main className={tw `flex flex-col min-h-screen`}>
        
        <div className={tw `flex-1`}>
          <div className={tw `container`}>
            <div className={tw `flex flex-col items-center mt-10`}>
              <p className={tw `text-center text-3xl text-white font-semibold `}>All Post</p>
              <div className={tw `border-t-4 border-yellow-300 w-10 mt-1`}></div>
            </div>
            <div className={tw `mx-6 mt-10 text-white`}>
              <ul className={tw `flex justify-center flex-col lg:flex-row lg:justify-evenly lg:items-stretch`}>
                {allPostsData.map(({ id, date, title, description }) => (
                  <li className={tw `cursor-pointer border border-gray-500 w-72 my-2 p-5 rounded-md hover:text-yellow-300`} key={id}>
                    <a href={`/posts/blog/${id}`}>
                      <p className={tw ` text-lg transition duration-150 ease-in-out`}>{title}</p>
                      <div className={tw `flex items-center`}>
                        <MdDateRange className={tw `text-gray-400`} />
                        <p className={tw `text-xs ml-1 mt-1 text-gray-400`}>{date}</p>
                      </div>
                      <div className={tw `border-t border-gray-500 my-3`}></div>
                      <p className={tw `text-gray-400`}>{description}</p>
                    </a>
                  </li>
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
