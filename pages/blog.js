import Head from 'next/head'
import Nav from './Components/Nav/Nav'
import {css, apply, theme, tw} from 'twind/css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'
import dates from '../public/images/date.svg'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function project({allPostsData}) {

  return (
    <>
      <Head>
        <title>Blog | Arnold Blog</title>
      </Head>

      <Nav />
      
      <main className={tw `container mx-auto`}>

        <div className='heading'>
          <h1>All <span className={tw `text-yellow-300`}>Posts</span></h1>
        </div>

        <div className={tw `flex mt-20 flex-col sm:flex-row justify-evenly items-center`}>
        {allPostsData.map(({ id, date, image, title, desc }) => (
          <a key={id}  href={`/posts/${id}`}>
            <div className={tw `w-80 my-10 sm:my-0 bg-gray-500 rounded-2xl mt-0 transition-all duration-500 sm:hover:-mt-5 hover:shadow-md relative`}>
                <div>
                <img className={tw `rounded-t-2xl`} src={image} alt=""/>
              </div>
              <div className={tw `text-white p-4`}>
                <p className={tw `text-lg font-semibold`}>{title}</p>
                <small className={tw `flex items-center`}>
                  <img className={tw `mr-2`} src={dates} alt="img"/>
                  <Date dateString={date} />
                </small>
                <div className={tw `border-t-1 py-2 my-4 border-white`}>
                  <p>{desc}</p>
                </div>
                {/* <div className={tw `flex items-center`}>
                  <div className={tw `bg-red-500 py-1 px-2 mr-2 w-20 justify-center rounded-md text-center flex items-center`}>
                    <img className={tw `mr-1`} src={views} alt="img"/>
                    <Link target="_blank" href={view}>
                      <a target="_blank" className={tw `ml-1`} >view</a>
                    </Link>
                  </div>
                  <dir className={tw `bg-blue-500 py-1 px-2 w-24 justify-center rounded-md text-center flex items-center`}>
                    <img className={tw `mr-1`} src={github} alt="img"/>
                    <Link target="_blank" href={srcode}>
                      <a target="_blank" className={tw `ml-1`}>source</a>
                    </Link>
                  </dir>
                </div> */}
              </div>
              </div>
          </a>
        ))}
        </div>
      
      </main>

    </> 
  )
}