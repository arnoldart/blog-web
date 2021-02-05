import Nav from '../pages/Components/Nav/NavBlog'
import {tw} from 'twind'
import Footer from './footer'

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={tw `mt-10`}>
        {children}
      </main>
      <div>
        <div className={tw `hidden sm:block`}>
          <Footer />
        </div>
        <div className={tw `block sm:hidden flex mt-10 justify-center w-full bg-gray-700 py-5`}>
          <div className={tw `text-center text-white text-xl sm:text-lg `}>
            <h1>Powered by <span className={tw `text-yellow-300 font-bold`}>Vercel</span> <br className={tw `block sm:hidden`}/> Copyright &copy; 2021 <span className={tw `text-yellow-300 font-bold`}>Arnold</span> </h1>
          </div>
        </div>
      </div>
    </>
  )
}