import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // GitHub Pages repo site: https://<user>.github.io/Portfolio/
  basePath: '/Portfolio',
  assetPrefix: '/Portfolio/',

  // next/image doesn't work with static export unless unoptimized
  images: {
    unoptimized: true,
  },

  // Enable MDX pages/components
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],

  // Keep your includes (optional, but fine to keep)
  outputFileTracingIncludes: {
    '/articles/*': ['./src/app/articles/**/*.mdx'],
  },
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrism],
  },
})

export default withMDX(nextConfig)
