import { WEBSITE_HOST_URL } from '@/lib/constants'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'
import Link from 'next/link'
import { Metadata } from 'next'
import { PostCard } from '@/components/PostCard' // Ensure you import PostCard if it's defined in another file

export const metadata: Metadata = {
  title: 'All Posts',
  description: 'A list of all blog posts',
  openGraph: {
    title: 'All Posts',
    description: 'A list of all blog posts',
    url: `${WEBSITE_HOST_URL}/posts`,
  },
  twitter: {
    title: 'All Posts',
    description: 'A list of all blog posts',
  },
}

const PostsPage = () => {
  return (
    <div className="mt-16">
      <h2>From the blog</h2>
      <p className="mt-2 leading-8">
        Blog posts are written with MDX and processed through Contentlayer.
      </p>
      <div className="mt-10 space-y-12 border-t border-gray-200 pt-10 dark:border-gray-700">
        {allPosts.map((post, idx) => (
          <PostCard key={idx} {...post} />
        ))}
      </div>
    </div>
  )
}

export default PostsPage
