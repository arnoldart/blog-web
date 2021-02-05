import {tw} from 'twind'

export default function Footer() {
  return (
    <>
      <div className={tw `static mt-10 sm:absolute bottom-0 flex justify-center w-full bg-gray-700 py-5`}>
        <div className={tw `text-center text-white text-xl sm:text-lg`}>
          <div>
            <img src="" alt=""/>
          </div>
          <h1>Powered by <span className={tw `text-yellow-300 font-bold`}>Vercel</span> Copyright &copy; 2021 <span className={tw `text-yellow-300 font-bold`}>Arnold</span> </h1>
        </div>
      </div>
    </>
  )
}