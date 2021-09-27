import { getAllPostIds, getPostData } from "../../../lib/blog";
import Nav from '../../../Components/Nav'
import Head from 'next/head'
import Footer from "../../../Components/Footer";

export default function Post({postData}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="blog content"/>
        <title>Project | {postData.title}</title>
      </Head>

      <Nav />

      <main className="flex flex-col min-h-screen text-white">
        <div className="flex-1">
          <div className='container'>
            <div className=" mt-10">
              <p className="text-center text-3xl font-semibold">{postData.title}</p>
              <div className="mt-10" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </div>
          </div>
        </div>
        <footer className="mt-10">
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