import Head from 'next/head'
import Nav from '../Components/Nav'
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

      <main className="flex flex-col min-h-screen">
        
        <div className="flex-1">
          <div className="container">
            <div className="flex flex-col items-center mt-10">
              <p className="text-center text-3xl text-white font-semibold ">All Post</p>
              <div className="border-t-4 border-yellow-300 w-10 mt-1"></div>
            </div>
            <div className="flex justify-center items-center">
              <div className="mx-6 mt-10 text-white w-auto lg:w-120">
                <ul className="flex justify-center items-center flex-wrap lg:justify-center lg:flex-row lg:items-stretch">
                  {allPostsData.map(({ id, date, title, description }) => (
                    <li className="cursor-pointer border border-gray-500 w-72 my-2 p-5 rounded-md hover:text-yellow-300 mx-5" key={id}>
                      <a href={`/posts/blog/${id}`}>
                        <p className=" text-lg transition duration-150 ease-in-out">{title}</p>
                        <div className="flex items-center">
                          <MdDateRange className="text-gray-400" />
                          <p className="text-xs ml-1 mt-1 text-gray-400">{date}</p>
                        </div>
                        <div className="border-t border-gray-500 my-3"></div>
                        <p className="text-gray-400">{description}</p>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
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
