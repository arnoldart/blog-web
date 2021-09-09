import { getAllPostIds, getPostData } from "../../../lib/posts";
import Nav from '../../../Components/Nav'
import Head from 'next/head'
import Footer from "../../../Components/Footer";
import { tw } from "twind";

export default function Post({postData}) {
  return (
    <>
      <Head>
        <title>Project | {postData.title}</title>
      </Head>

      <Nav />

      <main className={tw `flex flex-col min-h-screen text-white`}>
        <div className={tw `flex-1`}>
          <div className='container'>
            <div className={tw `mx-6`}>
              <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
          </div>
        </div>
        <footer className={tw `mt-10`}>
          <Footer />
        </footer>
      </main>
      
    </>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}