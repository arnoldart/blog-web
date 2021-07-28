import Head from 'next/head'
import Image from 'next/image'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'
import { getSortedPostsData } from '../lib/posts'

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Project({allPostsData}) {
  return (
    <>
      <Head>
        <title>Project | Arnold Blog</title>
      </Head>

      <Nav />
      <main className={tw `flex flex-col min-h-screen`}>
        
        <div className={tw `flex-1`}>
          <div className="container">
            <div className={tw `mx-6 text-white`}>
              <ul className={tw ``}>
              {allPostsData.map(({ id, date, title }) => (
                <a href="" key={id}>
                  <li>
                    {title}
                    <br />
                    {id}
                    <br />
                    {date}
                  </li>
                </a>
              ))}
              </ul>
            </div>
          </div>
        </div>

        <div className={tw `mt-10`}>
          <Footer />
        </div>
      </main>

    </>
  )
}
