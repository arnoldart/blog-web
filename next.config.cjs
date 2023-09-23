/** @type {import('next').NextConfig} */
// const withMDX = require('@next/mdx')({
//   extension: /\.mdx?$/,
//   options: {
//     // If you use remark-gfm, you'll need to use next.config.mjs
//     // as the package is ESM only
//     // https://github.com/remarkjs/remark-gfm#install
//     remarkPlugins: [],
//     rehypePlugins: [],
//     // If you use `MDXProvider`, uncomment the following line.
//     // providerImportSource: "@mdx-js/react",
//   },
// })
   

// module.exports = withMDX({
//   pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
//   // Optionally, add any other Next.js config below
//   reactStrictMode: true,
// })
import path from 'path'
import withMdx from '@next/mdx'

const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  // },
}

export default withMdx({
  extension: /\.mdx?$/,
  options: {
    providerImportSource: '@mdx-js/react',
  },
})