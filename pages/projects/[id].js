import { getAllPostIds, getPostData } from '../../lib/project'
import Date from '../../components/Date'
import Head from 'next/head'
import Layout from '../../components/Layout'
import { tw } from 'twind'
import github, { split } from '../../public/images/github.svg'
import views from '../../public/images/view.svg'
import Link from 'next/link'
import styled from './view.module.css'

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export default function Post({postData}) {
  let text = postData.tool
  let tools = text.map(e => {
    return (
        <div className={tw `border-b-2 border-gray-500 w-full`}>
          <p className={tw `py-4 `}>{e}</p>
        </div>
    )
  })

  let titleText = postData.title.split(' ')
  let title = (
    <div key={postData.id} className={tw `flex justify-center items-center text-3xl font-bold`}>
      <p className={tw `mr-1`}>{titleText[0]}</p>
      <p className={tw `text-yellow-300 ml-1`}>{titleText[1]}</p>
    </div>
  )

  return (
    <Layout post>
      <Head>
        <title>{postData.title}</title>
      </Head>

      <main className={tw `text-white mx-10 sm:mx-20`}>
        {title}
        <div className={tw `flex flex-col sm:flex-row mt-10`}>
          <div className={tw `w-full rounded-lg flex-1`}>
            <img className={tw `w-auto sm:w-4/5 border-2 border-yellow-300 rounded-lg`} src={postData.image} alt="img"/>
          </div>
          <div className={tw `mt-10 sm:mt-0`}>
            <div className={tw `w-full sm:w-80 border-2 border-yellow-300 rounded-lg relative`}>
              <div className={tw `p-4`}>
                <p className={tw `text-center font-bold`}>Tools</p>
                <div className={tw `flex flex-col mt-4 border-t-2 border-gray-500`}>
                  {tools}
                </div>
              </div>
              <div className={tw `flex bottom-0`}>
                <Link target="_blank" href={postData.view}>
                  <a target="_blank" className={tw `w-full`}>
                    <div className={tw `flex bg-red-500 justify-center p-3 rounded-bl-lg`}>
                      <img className={tw `mr-4`} src={views} alt="img"/>
                        view
                    </div>
                  </a>
                </Link>
                <Link target="_blank" href={postData.srcode}>
                  <a target="_blank" className={tw `w-full`}>
                    <div className={tw `flex bg-blue-500 justify-center p-3 rounded-br-lg`}>
                      <img className={tw `mr-4`} src={github} alt="img"/>
                      source
                    </div>
                  </a>
                </Link>
              </div>
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
      postData,
    }
  }
}