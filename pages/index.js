import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { tw } from 'twind'
import { getSortedPostsData } from '../lib/blog'
import { MdDateRange } from 'react-icons/md'

// Images
import ProfilePc from '../public/img/profil.png'

export async function getStaticProps() {
  const recentPostBlog = getSortedPostsData()
  return {
    props: {
      recentPostBlog
    }
  }
}

export default function Home({ recentPostBlog }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="home page"/>
        <title>Home | Arnold Blog</title>
      </Head>

      <Nav />

      <main className={tw `flex flex-col min-h-screen`}>
        <div className={tw `flex-1`}>
          <div className='container'>
            <div className={tw `bg-gray-700 rounded-lg mt-7 mx-6`}>
              <div className={tw `flex flex-col lg:flex-row items-center p-6`}>
                <div>
                  <Image src={ProfilePc} alt="test" width="512" height="512"/>
                </div>
                <div className={tw `text-white text-center lg:text-left mt-10 lg:ml-8 lg:mt-0`}>
                  <p className={tw `font-bold text-3xl lg:text-3xl`}>Halo semua perkenalkan saya Arnold</p>
                  <p className={tw `mt-3 text-lg text-gray-200`}>Seorang Junior Front End Developer, saya juga membagikan tips tips dan project sekaligus dengan source code nya.Seorang Junior Front End Developer, saya juga membagikan tips tips dan project sekaligus dengan source code nya.</p>
                </div>
              </div>
            </div>
            <div className={tw `flex flex-col items-center mt-20`}>
              <p className={tw `text-center text-3xl text-white font-semibold `}>Recent Posts</p>
              <div className={tw `border-t-4 border-yellow-300 w-10 mt-1`}></div>
            </div>
            <div className={tw `mx-6 mt-10 text-white`}>
              <ul className={tw `flex justify-center flex-col lg:flex-row lg:justify-evenly lg:items-stretch`}>
                {recentPostBlog.map(({ id, date, title, description }) => (
                  <a href={`/posts/blog/${id}`} key={id}>
                  <div className={tw `border border-gray-500 w-72 my-2 p-5 rounded-md hover:text-yellow-300`}>
                    <li className={tw `cursor-pointer`}>
                      <p className={tw ` text-lg transition duration-150 ease-in-out`}>{title}</p>
                      <div className={tw `flex items-center`}>
                        <MdDateRange className={tw `text-gray-400`} />
                        <p className={tw `text-xs ml-1 mt-1 text-gray-400`}>{date}</p>
                      </div>
                      <div className={tw `border-t border-gray-500 my-3`}></div>
                      <p className={tw `text-gray-400`}>{description}</p>
                    </li>
                  </div>
                </a>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <footer className={tw `mt-10`}>
          <Footer />
        </footer>
      </main>


    </>
  )
}
