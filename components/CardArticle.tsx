import { getAllPostMeta } from "~/lib/mdx"
import Link from 'next/link'

const CardArticle = async () => {
  const preview = await getAllPostMeta()
  return (
    <div>
      {preview.map((value:any) => 
      (
        <Link href={`/Article/${value.slug}`} key={value.slug}>
          <div>
            <p>ICON</p>
            <p>{value.date}</p>
          </div>
          <p>{value.title}</p>
          <p>{value.description}</p>
        </Link>
      )
      )}
    </div>
  )
}

export default CardArticle