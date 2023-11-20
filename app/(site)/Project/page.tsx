import { getAllPostMeta } from "~/lib/mdx"
import Link from 'next/link'
import CardArticle from "../_components/CardArticle"

const Project = () => {
  return (
    <div className="flex gap-5 flex-wrap">
      <CardArticle />
      <CardArticle />
    </div>
  )
}

export default Project