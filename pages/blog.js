import Head from 'next/head'
import Nav from './Components/Nav/Nav'
import {css, apply, theme, tw} from 'twind/css'
import DataProjects from './Components/Card/Projects/Data/DataProject'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/Date'

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
        {allPostsData.map(({ id, date, image, title }) => (
          <a key={id}  href={`/posts/${id}`} className={tw `w-80 h-96 my-10 sm:my-0 bg-gray-500 rounded-2xl mt-0 transition-all duration-500 sm:hover:-mt-10 hover:shadow-md`}>
            <div>
              <img className={tw `rounded-t-2xl`} src={image} alt=""/>
            </div>
            <div className={tw `text-white p-4 `}>
              <h3>{title}</h3>
              <p>{date}</p>
            </div>
          </a>
        ))}
        </div>
      
      </main>

    </> 
  )
}