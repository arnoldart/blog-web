import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const rootDirectory = path.join(process.cwd(), 'Posts',)

export const getPostBySlug = async (slug: string) => {
  const realSlug = slug.replace(/\.md$/, '')
  // const filePath = path.join(rootDirectory, `${realSlug}.md`)

  // const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" })
  const fullPath = path.join(rootDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents)

  return {
    meta: {
      ...data,
      slug: realSlug,
    },
    content
  }
}

export const getAllPostMeta = async () => {
  const files = fs.readdirSync(rootDirectory);
  let posts = []
  
  for(const file of files) {
    const { meta } = await getPostBySlug(file)
    posts.push(meta)
  }

  return posts
}