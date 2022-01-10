import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '@/Components/Footer'
import Nav from '@/Components/Nav'
import Styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <head>
        <title>Home | Arnold Blog</title>
      </head>

      <Nav />

      <main className="layout">
        <div style={{flex: '1'}}>
          <div className="container">
            <div className={Styles.Jumbotron}>
              <div>
                <img className={Styles.DevPhoto} src="https://avatars.githubusercontent.com/u/57179477?v=4" alt="dev profile" />
              </div>
              <div className={Styles.DevText}>
                <p className={Styles.Introduction}>Hello everyone my name is Arnold</p>
                <p className={Styles.DevDesc}>A Junior Front End Developer, I also share tips and projects along with the source code. BI simp Raiden EI in Genshin Impact she is so cute</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </main>
    </>
  )
}

export default Home
