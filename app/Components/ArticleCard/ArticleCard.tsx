import { getAllPostMeta } from "~/lib/mdx"
import Styles from './ArticleCard.module.scss'
import Link from "next/link"

const ArticleCard = async () => {
  const preview = await getAllPostMeta()
  return (
    <div>
      <div className={Styles.container_card}>
        {preview.map((value:any) => 
        (
          <Link href={`/Article/${value.slug}`} key={value.slug} className={Styles.card}>
            <div className={Styles.card_date_container}>
              <p>ICON</p>
              <p>{value.date}</p>
            </div>
            <p className={Styles.card_title}>{value.title}</p>
            <p className={Styles.card_title}>{value.description}</p>
          </Link>
        )
        )}
      </div>
    </div>
  )
}

export default ArticleCard