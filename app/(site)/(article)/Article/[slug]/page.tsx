import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug } from "~/lib/mdx"

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


const Article = async({params}:PageProps) => {
  const { content } = await getPageContent(params.slug)
  return (
    <section>
      <article className="mdx-content dark:text-neutral-200 mx-auto py-12 max-w-screen-md prose xl:prose-lg prose-ul:break-words prose-code:break-words print:prose-pre:border print:pt-3 print:prose-pre:whitespace-pre-wrap">
        <MDXRemote source={content} />
      </article>
    </section>
  )
}

export default Article