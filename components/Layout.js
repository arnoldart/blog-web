import Nav from '../pages/Components/Nav/NavPro'
import {tw} from 'twind'

export default function Layout({children}) {
  return (
    <>
      <Nav />
      <main className={tw `mt-10`}>
        {children}
      </main>
      <div className={tw `flex mt-10 justify-center w-full bg-gray-700 py-5`}>
        <div className={tw `text-center text-white text-lg`}>
          <div>
            <img src="" alt=""/>
          </div>
          <h1>Powered by <span className={tw `text-yellow-300 font-bold`}>Vercel</span> Copyright &copy; 2021 <span className={tw `text-yellow-300 font-bold`}>Arnold</span> </h1>
        </div>
      </div>
    </>
  )
}