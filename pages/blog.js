import Head from 'next/head'
import Nav from './Composition/Nav/NavBlog'
import {tw} from 'twind'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Arnold Blog</title>
      </Head>
      <Nav />

     <main className={tw `flex justify-center`}>

        <div className='heading'>
          <h1>My <span className={tw `text-yellow-300`}>Blog</span></h1>
        </div>
      
      </main>
    </>
  )
}