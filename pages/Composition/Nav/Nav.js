import React,{useState} from 'react'
import {tw} from 'twind'
import github from '../../img/github.svg'
import instagram from '../../img/instagram.svg'
import message from '../../img/message.svg'
import styled from './Nav.module.css'
import { FaBars, FaTimes } from 'react-icons/fa'

export default function Nav() {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false);

  return(
    <>
      <nav className={tw `mx-auto mt-6 container flex flex-col sm:flex-row items-center justify-between text-white text-center`}>
        <div className={styled.logo}>
          <div className={tw `ml-7`}>
            <h1 className={tw `text-2xl font-semibold`}>Arnold</h1>
          </div>
          <div className={styled.menuIcon} onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
        </div>
        <div className={click ? 'navMenu active' : 'navMenu'}>
          <div className={tw `mt-28 sm:mt-0`}>
            <ul className={tw `flex flex-col sm:flex-row text-lg`}>
              <li className={tw `mt-8 sm:mt-0`}><a href="" className={tw `ml-0 sm:ml-10 `, styled.coba}>Home</a></li>
              <li className={tw `mt-8 sm:mt-0`}><a href="" className={tw `ml-0 sm:ml-10 transition duration-150 ease-in hover:text-yellow-400`}>Project</a></li>
              <li className={tw `mt-8 sm:mt-0`}><a href="" className={tw `ml-0 sm:ml-10 transition duration-150 ease-in hover:text-yellow-400`}>Blog</a></li>
              <li className={tw `mt-8 sm:mt-0`}><a href="" className={tw `ml-0 sm:ml-10 transition duration-150 ease-in hover:text-yellow-400`}>About</a></li>
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