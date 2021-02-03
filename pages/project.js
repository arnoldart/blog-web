import Head from 'next/head'
import Nav from './Components/Nav/Nav'
import {tw} from 'twind'
import { getSortedPostsData } from '../lib/project'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Blog({allPostsData}) {
  return (
    <>
      <Head>
        <title>Project | Arnold Blog</title>
      </Head>
      <Nav />

      <main className={tw `container mx-auto`}>

        <div className='heading'>
          <h1>All <span className={tw `text-yellow-300`}>Project</span></h1>
        </div>

        <div className={tw `flex mt-20 flex-col sm:flex-row justify-evenly items-center`}>
        {allPostsData.map(({ id, date, image, title }) => (
            <a key={id} href={`/projects/${id}`} className={tw `w-80 h-96 my-10 sm:my-0 bg-gray-500 rounded-2xl mt-0 transition-all duration-500 sm:hover:-mt-5 hover:shadow-md`}>
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