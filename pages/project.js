import Head from 'next/head'
import Nav from './Components/Nav/NavProject'
import {css, apply, theme, tw} from 'twind/css'
import DataProjects from './Components/Card/Projects/Data/DataProject'

export default function project() {

  return (
    <>
      <Head>
        <title>Project | Arnold Blog</title>
      </Head>

      <Nav />
      
      <main className={tw `container mx-auto`}>

        <div className='heading'>
          <h1>My <span className={tw `text-yellow-300`}>Project</span></h1>
        </div>

        <div className={tw `mt-20`}>
          <DataProjects />
        </div>
      
      </main>

    </> 
  )
}