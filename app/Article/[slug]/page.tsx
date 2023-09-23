import Navbar from "~/app/Components/Navbar/Navbar"
import { getPostBySlug } from "~/lib/mdx"
import Styles from './Article.module.scss'
import { MDXProvider } from "@mdx-js/react"
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";

type PageProps = {
  params: {
    slug: string;
    title: string
  };
};

const getPageContent = async (slug:string) => {
  const { meta, content } = await getPostBySlug(slug)
  return { meta, content }
}

export const generateMetadata = async ({params: { slug, title }}:PageProps) => {
  const { meta } = await getPageContent(slug)

  if(!meta) {
    return {
      title: "Post Not Found"
    }
  }

  return {title: meta.slug}
}

const Page = async({params}:PageProps) => {
  const { content } = await getPageContent(params.slug)
  return (
    <section className={Styles.section}>
      <Navbar />
      {/* <MDXProvider components={components}>
        {content}
      </MDXProvider> */}
    </section>
  )
}

export default Page
  