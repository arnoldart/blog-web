"use client"

import Link from 'next/link'
import Particle from '~/components/particle'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import TextPlugin from 'gsap/TextPlugin'
import { Button } from '~/components/ui/button'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Footer from './_components/Footer'

const Home = () => {
  const [theme, setTheme] = useState("#0A0A0A")
  useEffect(() => {
    setTheme(window.localStorage.getItem('theme') === "dark" ? "#fff" :  "#0A0A0A")
  }, [])

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
    <div>
      <Particle color={theme} />
      <div className='flex justify-center h-screen items-center text-center text-white relative'>
        <div>
          <div id='myProfile'  className='justify-center flex'>
            <Image 
              src={'/img/profil.png'} 
              alt={'test'}    
              priority={true}
              layout='fixed'
              width={99}
              height={99}
              style={{
                borderRadius: "100%"
              }}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
          <div className='flex flex-col items-center mt-4'>
            <p id='name' className='width-full max-w-[288px]'></p>
            <p id='desc' className='width-full max-w-[544px] mt-2'></p>
          </div>
          <div id='button' className='mt-4'>
            <Button>
              <Link href={"/Project"} className='flex items-center gap-x-3'>
                <p>SEE MY PROJECTS</p>
                <ArrowRightIcon className='h-4 w-4' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
