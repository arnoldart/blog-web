import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from "~/Components/Navbar/Nav";
import Styles from '../styles/Home.module.scss'
import LatestPost from '~/Components/LatestPost/LatestPost';
import { useState } from 'react';
import AboutMe from '~/Components/AboutMe/AboutMe';

const Home: NextPage = () => {
  return (
    <>

      {/* <Nav /> */}
      {/* <LatestPost />  */}

      <main className={Styles.section}>
      <AboutMe />
      
      </main>
    </>
  )
}

export default Home
