import React, {useState} from 'react'
import {tw} from 'twind'
import github from '../../img/github.svg'
import instagram from '../../img/instagram.svg'
import message from '../../img/message.svg'
import styled from './Nav.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'
import Link from 'next/link'

export default function NavIndex() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return(
    <>
      <nav className={tw `flex container mx-auto mt-6 flex-col sm:flex-row items-center justify-between text-white text-center`}>
        <div className={styled.logo}>
          <div className={tw `ml-7 sm:ml-0`}>
            <h1 className={tw `text-2xl font-semibold`}>Arnold</h1>
          </div>
          <div className={styled.menuIcon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div className={click ? 'navMenu active' : 'navMenu'}>
          <div className={styled.navContainer}>
            <ul className={tw `flex flex-col sm:flex-row text-xl sm:text-lg`}>
              <li className={tw `mt-8 sm:mt-0`}>
                <Link href="/">
                  <a onClick={closeMobileMenu} className={tw `ml-0 sm:ml-10 transition duration-150 ease-in text-yellow-300`}>Home</a>
                </Link>
              </li>
              <li className={tw `mt-8 sm:mt-0`}>
                <Link href="/project">
                  <a onClick={closeMobileMenu} className={tw `ml-0 sm:ml-10 transition duration-150 ease-in hover:text-yellow-300`}>Project</a>
                </Link>
              </li>
              <li className={tw `mt-8 sm:mt-0`}>
                <Link href="/blog">
                  <a onClick={closeMobileMenu} className={tw `ml-0 sm:ml-10 transition duration-150 ease-in hover:text-yellow-300`}>Blog</a>
                </Link>
              </li>
              <li className={tw `mt-8 sm:mt-0`}>
                <Link href="/about">
                <a onClick={closeMobileMenu} className={tw `ml-0 sm:ml-10 transition duration-150 ease-in hover:text-yellow-300`}>About</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className={tw `flex items-center mt-8 sm:mt-0`}>
            <img className={tw `ml-0 sm:ml-10`} src={instagram} alt="instagram"/>
            <img className={tw `ml-6 sm:ml-10 mr-6 sm:mr-0 w-8 h-8`} src={github} alt="github"/>
            <img className={tw `ml-0 sm:ml-10`} src={message} alt="message"/>
          </div>
        </div>
      </nav>
    </>
  )
}