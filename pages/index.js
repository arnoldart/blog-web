import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import { tw, setup } from 'twind'
import { getSortedPostsData } from '../lib/blog'
import { MdDateRange } from 'react-icons/md'
import { motion } from 'framer-motion' 
import Link from 'next/link'

// Images
import ProfilePc from '../public/img/profil.png'

setup({
  theme: {
    extend: {
      spacing: {
        120: "64.1%",
      }
    }
  }
})

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

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
            <div className={tw `bg-gray-700 rounded-lg`}>
              <div className={tw `flex flex-col lg:flex-row items-center p-6`}>
                <Link href="https://github.com/arnoldart">
                  <a target="_blank">
                    <Image src={ProfilePc} alt="test" width="512" height="512"/>
                  </a>
                </Link>
                <div className={tw `text-white text-center lg:text-left mt-10 lg:ml-8 lg:mt-0`}>
                  <p className={tw `font-bold text-3xl lg:text-3xl`}>Hello everyone my name is Arnold</p>
                  <p className={tw `mt-3 text-lg text-gray-200`}>A Junior Front End Developer, I also share tips and projects along with the source code. Btw I simp Raiden EI in Genshin Impact she is so cute</p>
                </div>
              </div>
            </div>
            <div className={tw `flex flex-col items-center mt-20`}>
              <p className={tw `text-center text-3xl text-white font-semibold `}>Recent Posts</p>
              <div className={tw `border-t-4 border-yellow-300 w-10 mt-1`}></div>
            </div>
            <div className={tw `flex justify-center items-center`}>
              <div className={tw `mx-6 mt-10 text-white w-auto lg:w-120`}>
                <motion.ul
                  className={tw `flex justify-center items-center flex-wrap lg:justify-center lg:flex-row lg:items-stretch ${container}`}
                  variants={container}
                  initial="hidden"
                  animate="visible"
                >
                  {
                    recentPostBlog.slice(0, 3).map(({ id, date, title, description }, index) => (
                      <motion.li className={tw `cursor-pointer border border-gray-500 my-2 p-5 w-72 rounded-md hover:text-yellow-300 mx-5`} key={index} variants={item}>
                        <a href={`/posts/blog/${id}`}>
                          <p className={tw ` text-lg transition duration-150 ease-in-out`}>{title}</p>
                          <div className={tw `flex items-center`}>
                            <MdDateRange className={tw `text-gray-400`} />
                            <p className={tw `text-xs ml-1 mt-1 text-gray-400`}>{date}</p>
                          </div> 
                          <div className={tw `border-t border-gray-500 my-3`}></div>
                          <p className={tw `text-gray-400`}>{description}</p>
                        </a>
                      </motion.li>
                    ))
                  }
                </motion.ul>
              </div>
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
