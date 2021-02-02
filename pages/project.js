import Head from 'next/head'
import Nav from './Composition/Nav/NavProject'
import {css, apply, theme, tw} from 'twind/css'

export default function project() {

  return (
    <>
      <Head>
        <title>Project | Arnold Blog</title>
      </Head>

      <Nav />
      
      <main className={tw `flex justify-center`}>

        <div className='heading'>
          <h1>My <span className={tw `text-yellow-300`}>Project</span></h1>
        </div>
      
      </main>

    </> 
  )
}