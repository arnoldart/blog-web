import { tw } from "twind";

export default function Footer() {
  return (
    <>
      <main>
        <div className={tw `bg-gray-900 py-3 flex justify-center`}>
          <p className={tw `text-white text-center text-xs md:text-base w-7/12`}>Powered by <span className={tw `font-bold text-yellow-300`}>NextJs</span> and <span className={tw `font-bold text-yellow-300`}>Vercel</span> Copyright &copy; 2021 <span className={tw `font-bold text-yellow-300`}>Arnold</span></p>
        </div>
      </main>
    </>
  )
}