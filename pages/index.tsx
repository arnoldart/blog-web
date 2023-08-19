import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Nav from "~/Components/Nav";
import Styles from '../styles/Home.module.css'
import LatestPost from '~/Components/LatestPost';

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
