import Head from 'next/head'
import Nav from './Components/Nav/NavProject'
import {tw} from 'twind'
import DataProjects from './Components/Card/Projects/Data/DataProject'

export default function Blog() {
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

        <div className={tw `mt-20`}>
          <DataProjects />
        </div>
      
      </main>

    </>
  )
}