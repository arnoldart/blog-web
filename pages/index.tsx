import type { NextPage } from 'next'
import Styles from '../styles/Home.module.scss'
import AboutMe from '~/Components/AboutMe/AboutMe';

const Home: NextPage = () => {
  
  return (
    <>

      <main className={Styles.section}>
        <AboutMe />
      </main>
    </>
  )
}

export default Home
