"use client"

import Nav from '~/app/Components/Navbar/Navbar'
import AboutMe from '~/app/Components/AboutMe/AboutMe'
import { useLayoutEffect } from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import Styles from './page.module.scss'

export default function Home() {
  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin)

    const timeline = gsap.timeline();
    timeline.fromTo("#name", {text: ""}, {text: {value: "Hai, Saya Jedidta Adoni Saputra aka Arnold.", delimiter: ""} ,  duration: 3});
    timeline.fromTo("#desc", {text: ""}, {text: "Saya seorang web programmer di bagian Frontend.", duration: 3}, "<.5");
    timeline.fromTo('#myProfile', {opacity: 0, y: -100}, {opacity: 1, y:0, duration: 1});
    timeline.fromTo('#backgroundParticles', {opacity: 0}, {opacity: 1, duration: 1});
    timeline.fromTo('#button', {opacity: 0}, {opacity: 1, duration: 1}, 5);
    timeline.fromTo('#navbar', {opacity: 0}, {opacity: 1, duration: 1}, 5);
  }, [])

  return (
    <section className={Styles.section}>
      <Nav />
      <AboutMe />
    </section>
  )
}