'use client';
import Styles from './AboutMe.module.scss';
import gsap from 'gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useCallback, useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import particlesConfig from './particles';

const AboutMe = () => {
  useLayoutEffect(() => {
    gsap.registerPlugin(TextPlugin)

    const timeline = gsap.timeline();
    timeline
    .fromTo("#name", {text: ""}, {text: {value: "Hai, Saya Jedidta Adoni Saputra aka Arnold.", delimiter: ""} ,  duration: 3})
    .fromTo("#desc", {text: ""}, {text: "Saya seorang web programmer di bagian Frontend.", duration: 3}, "<.5")
    .fromTo('#myProfile', {opacity: 0, y: -100}, {opacity: 1, y:0, duration: 1})
    .fromTo('#backgroundParticles', {opacity: 0}, {opacity: 1, duration: 1})
    
  }, [])

  const particlesInit = useCallback(async engine => {
    await loadSlim(engine)
  }, [])

  const particlesLoaded = useCallback(async container => {
    await container
  }, [])

  return (
    <div className={Styles.section}>
      <Particles id='backgroundParticles' init={particlesInit} loaded={particlesLoaded} options={particlesConfig} />
      <div className={Styles.container}>
        <div>
          <div id='myProfile' className={Styles.backgroundImage}>
            <Image 
              src={'/img/profile.jpeg'} 
              alt={'test'}    
              priority={true}
              layout='fixed'
              width={130}
              height={130}
              style={{
                borderRadius: "100%"
              }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className={Styles.myContainer}>
            <p id='name' className={Styles.myName}></p>
            <p id='desc' className={Styles.myDesc}></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;