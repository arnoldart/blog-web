import { tw } from "twind";
import { FaBars, FaTimes } from 'react-icons/fa'
import { useEffect, useState } from "react";
import Link from './AtiveLink'
import { motion, transform } from 'framer-motion'

export default function Nav() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)

  useEffect(() => {
    click ? document.body.style.overflow= "hidden" : document.body.style.overflow= "visible"
  })

  return (
    <>
      <nav className='container'>
        <div className={tw`flex flex-col sm:flex-row items-center justify-between text-white my-3 sm:my-6`}>
          <div className={tw`flex items-center justify-between text-white z-10 w-full`}>
            <Link href="/">
              <a className={tw`text-2xl font-semibold`}>Arnold</a>
            </Link>
            <div onClick={handleClick} className={tw`block text-xl sm:hidden`}>
              <motion.div
                animate={{
                  y: click ? 8 : [8, 8, 0],
                  rotate: click ? [0, 0, 1125] : [1125, 0 , 0],
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1
                }}
                className={tw`w-7 h-0.5 bg-white rounded-l`}
                onClick={handleClick}
              >

              </motion.div>
              <motion.div
                animate={{
                  opacity: click ? 0 : [0, 0, 1]
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1
                }}
                className={tw`w-7 h-0.5 my-1.5 bg-white rounded-l`}
                onClick={handleClick}
              >

              </motion.div>
              <motion.div
                animate={{
                  y: click ? -8 : [-8, -8, 0],
                  rotate: click ? [0, 0, 1215] : [1215, 0, 0]
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                  mass: 1
                }}
                className={tw`w-7 h-0.5 bg-white rounded-l`}
                onClick={handleClick}
              >

              </motion.div>
            </div>
          </div>
          <div className={click ? "navMenu active" : 'navMenu'}>
            <ul className={tw`flex items-center flex-col sm:flex-row h-screen justify-center sm:h-0`}>
              <li className={tw`ml-0 sm:ml-5 mb-5 sm:mb-0 transition duration-150 ease-in hover:text-yellow-300 cursor-pointe`}>
                <Link activeClassName={tw`text-yellow-300 font-bold`} href="/">
                  <a>Home</a>
                </Link>
              </li>
              <li className={tw`ml-0 sm:ml-5 mb-5 sm:mb-0 transition duration-150 ease-in hover:text-yellow-300 cursor-pointe`}>
                <Link activeClassName={tw`text-yellow-300 font-bold`} href="/Project">
                  <a>Project</a>
                </Link>
              </li>
              <li className={tw`ml-0 sm:ml-5 mb-5 sm:mb-0 transition duration-150 ease-in hover:text-yellow-300 cursor-pointe`}>
                <Link activeClassName={tw`text-yellow-300 font-bold`} href="/Blog">
                  <a>Blog</a>
                </Link>
              </li>
              <li className={tw`ml-0 sm:ml-5 transition duration-150 ease-in hover:text-yellow-300 cursor-pointe`}>
                <Link activeClassName={tw`text-yellow-300 font-bold`} href="/About">
                  <a>About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}