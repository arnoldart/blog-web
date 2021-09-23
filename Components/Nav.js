import { tw } from "twind";
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from "react";
import Link from './AtiveLink'

export default function Nav() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  return (
    <>
      <nav className="container">
        <div className={tw `flex sm:flex-row flex-col justify-between text-white items-center px-6`}>
          <div className={tw `flex items-center justify-between text-white my-3 w-full sm:w-auto z-10`}>
            <Link href="/">
              <a className={tw `text-2xl font-semibold`}>Arnold</a>
            </Link>
            <div onClick={handleClick} className={tw `block text-xl sm:hidden`}>
              {click ? <FaTimes/> : <FaBars/>}
            </div>
          </div>
          <div className={click ? "navMenu active" : "navMenu"}>
            <div className={tw `flex flex-col justify-center items-center h-screen sm:h-0`}>
              <ul className={tw `flex text-lg sm:flex-row flex-col text-center sm:text-left`}>
                <li className={tw `ml-0 sm:ml-5 mb-5 sm:mb-0 transition duration-150 ease-in hover:text-yellow-300 cursor-pointer`}>
                  <Link activeClassName={tw `text-yellow-300 font-bold`} href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li className={tw `ml-0 sm:ml-5 mb-5 sm:mb-0 transition duration-150 ease-in hover:text-yellow-300 cursor-pointer`}>
                  <Link activeClassName={tw `text-yellow-300 font-bold`} href="/Project">
                    <a>Project</a>
                  </Link>
                </li>
                <li className={tw `ml-0 sm:ml-5 mb-5 sm:mb-0 transition duration-150 ease-in hover:text-yellow-300 cursor-pointer`}>
                  <Link activeClassName={tw `text-yellow-300 font-bold`} href="/Blog">
                    <a>Blog</a>
                  </Link>
                </li>
                <li className={tw `ml-0 sm:ml-5 transition duration-150 ease-in hover:text-yellow-300 cursor-pointer`}>
                  <Link activeClassName={tw `text-yellow-300 font-bold`} href="/About">
                    <a>About</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}