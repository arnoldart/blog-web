import {tw} from 'twind'
import github from '../../img/github.svg'
import instagram from '../../img/instagram.svg'
import message from '../../img/message.svg'
import styled from './Nav.module.css'

export default function Nav() {
  return(
    <>
      <nav className={tw `mx-auto mt-8 container flex items-center justify-between text-white text-center`}>
        <div>
          <h1 className={tw `text-2xl font-semibold`}>Arnold</h1>
        </div>
        <div>
          <ul className={tw `flex text-lg ml-20`}>
            <li><a href="" className={tw `ml-10`, styled.coba}>Home</a></li>
            <li><a href="" className={tw `ml-10 transition duration-150 ease-in hover:text-yellow-400`}>Projek</a></li>
            <li><a href="" className={tw `ml-10 transition duration-150 ease-in hover:text-yellow-400`}>Blog</a></li>
            <li><a href="" className={tw `ml-10 transition duration-150 ease-in hover:text-yellow-400`}>About</a></li>
          </ul>
        </div>
        <div className={tw `flex items-center`}>
          <img className={tw `ml-10`} src={github} alt="github"/>
          <img className={tw `ml-10`} src={instagram} alt="instagram"/>
          <img className={tw `ml-10`} src={message} alt="message"/>
        </div>
      </nav>
    </>
  )
}