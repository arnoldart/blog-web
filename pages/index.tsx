import type { NextPage } from 'next'
import Styles from '../styles/Home.module.scss'
import AboutMe from '~/Components/AboutMe/AboutMe';
import { useLayoutEffect } from 'react';
import gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import Nav from '~/Components/Navbar/Nav';

const Home: NextPage = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin)

    const timeline = gsap.timeline();
    timeline
    .fromTo("#name", {text: ""}, {text: {value: "Hai, Saya Jedidta Adoni Saputra aka Arnold.", delimiter: ""} ,  duration: 3})
    .fromTo("#desc", {text: ""}, {text: "Saya seorang web programmer di bagian Frontend.", duration: 3}, "<.5")
    .fromTo('#myProfile', {opacity: 0, y: -100}, {opacity: 1, y:0, duration: 1})
    .fromTo('#backgroundParticles', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('#button', {opacity: 0}, {opacity: 1, duration: 1}, 5)
    .fromTo('#navbar', {opacity: 0}, {opacity: 1, duration: 1}, 5)
  }, [])
  return (
    <>

      <main className={Styles.section}>
        <Nav />
        <AboutMe />
      </main>
    </>
  )
}

export default Home
