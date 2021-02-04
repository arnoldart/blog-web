import { getAllPostIds, getPostData } from '../../lib/posts'
import Date from '../../components/Date'
import Head from 'next/head'
import Layout from '../../components/Layouts'
import {tw} from 'twind'

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

      <main className={tw `text-white mx-10 sm:mx-20`}>
        <div className={tw `text-center`}>
          <p className={tw `font-bold text-2xl`}>{postData.title}</p>
        </div>
        <div className={tw `mt-10`}>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
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