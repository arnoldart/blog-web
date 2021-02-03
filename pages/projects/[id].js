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
        <div className={tw `flex`}>
          <div className={tw `w-4/5 flex-initial rounded-lg`}>
            <img className={tw `w-4/5 border-2 border-yellow-300 rounded-lg`} src={postData.image} alt="img"/>
          </div>
          <div className={tw `w-80 p-4 border-2 border-yellow-300 rounded-lg`}>
            <p className={tw `text-center font-bold`}>Tools</p>
            <div>
              <p>Next</p>
              <p>Next</p>
              <p>Next</p>
              <p>Next</p>
            </div>
          </div>
        </div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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