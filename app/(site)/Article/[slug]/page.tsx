import Navbar from "~/app/Components/Navbar/Navbar"
import { getPostBySlug } from "~/lib/mdx"
import Styles from './Article.module.scss'
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
      <article className="prose md:prose-lg lg:prose-xl prose-headings:text-white prose-p:text-white">
        <MDXRemote source={content} />
      </article>
    </section>
  )
}

export default Page
  