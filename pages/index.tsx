import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from "~/Components/Navbar/Nav";
import Styles from '../styles/Home.module.scss'
import LatestPost from '~/Components/LatestPost/LatestPost';

const Home: NextPage = () => {
  return (
    <>

      <Nav />
      <LatestPost /> 

      <main className={Styles.section}>
      
      </main>
    </>
  )
}

export default Home
