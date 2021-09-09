import Head from 'next/head'
import Nav from '../Components/Nav'
import { tw } from 'twind'
import Footer from '../Components/Footer'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'

export async function getStaticProps() {
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
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>Project | Arnold Blog</title>
      </Head>

      <Nav />
      <main className={tw `flex flex-col min-h-screen`}>
        
        <div className={tw `flex-1`}>
          <div className="container">
            <div className={tw `mx-6 text-white`}>
              <ul>
              {allPostsData.map(({ id, date, title }) => (
                <a href={`/posts/project/${id}`} key={id}>
                  <li className={tw `cursor-pointer`}>
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
