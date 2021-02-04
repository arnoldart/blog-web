import { getAllPostIds, getPostData } from '../../lib/project'
import Date from '../../components/Date'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { tw } from 'twind'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData}) {
  return (
    <Layout post>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <main className={tw `text-white mx-20`}>
        <div className={tw `text-center font-bold`}>
          <p className={tw `text-3xl`}>{postData.title}</p>
        </div>
        <div className={tw `flex flex-col sm:flex-row mt-10`}>
          <div className={tw `w-full rounded-lg`}>
            <img className={tw `w-auto sm:w-4/5 border-2 border-yellow-300 rounded-lg`} src={postData.image} alt="img"/>
          </div>
          <div className={tw `w-full sm:w-80 p-4 border-2 border-yellow-300 rounded-lg mt-10 sm:mt-0`}>
            <p className={tw `text-center font-bold`}>Tools</p>
            <div className={tw `flex flex-col mt-4`}>
              <p className={tw `py-4 border-b-2 border-t-2 border-gray-500`}>Next</p>
              <p className={tw `py-4 border-b-2 border-gray-500`}>Next</p>
              <p className={tw `py-4 border-b-2 border-gray-500`}>Next</p>
              <p className={tw `py-4 border-b-2 border-gray-500`}>Next</p>
            </div>
          </div>
        </div>
      <div className={tw `mt-10`} dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </main>

    </Layout>
  )
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}