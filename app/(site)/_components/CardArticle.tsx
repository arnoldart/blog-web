import { getAllPostMeta } from "~/lib/mdx"
import { CalendarIcon } from "@radix-ui/react-icons"
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"

const CardArticle = async () => {
  const preview = await getAllPostMeta()
  return (
    <>
      {preview.map((value:any) => 
        (
          <Link href={`/Article/${value.slug}`} key={value.slug}>
            <Card  className="w-[25rem]">
              <CardHeader>
                <div className="flex item-center gap-x-3 items-center text-slate-400">
                  <CalendarIcon className="h-4 w-4" />
                  <p>{value.date}</p>
                </div>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  {value.description}
                </CardDescription>
              </CardContent>
              <CardFooter>
                
              </CardFooter>
            </Card>
          </Link>
        ))
      }
    </>
  )
}

export default CardArticle