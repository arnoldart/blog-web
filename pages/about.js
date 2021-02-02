import Head from 'next/head'
import Nav from './Composition/Nav/NavAbout'
import {tw} from 'twind'

export default function Blog() {
  return (
    <>
      <Head>
        <title>About | Arnold Blog</title>
      </Head>
      
      <Nav />

       <main className={tw `flex justify-center`}>

        <div className='heading'>
          <h1>About <span className={tw `text-yellow-300`}>Me</span></h1>
        </div>
      
      </main>
    </>
  )
}