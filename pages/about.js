import Head from 'next/head'
import Nav from './Components/Nav/Nav'
import {tw} from 'twind'
import Footer from '../components/footer'

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
      <div className={tw ` mt-10 absolute bottom-0 flex justify-center w-full bg-gray-700 py-5`}>
        <div className={tw `text-center text-white text-xl sm:text-lg`}>
          <div>
            <img src="" alt=""/>
          </div>
          <h1>Powered by <span className={tw `text-yellow-300 font-bold`}>Vercel</span> <br className={tw `block sm:hidden`}/> Copyright &copy; 2021 <span className={tw `text-yellow-300 font-bold`}>Arnold</span> </h1>
        </div>
      </div>
    </>
  )
}