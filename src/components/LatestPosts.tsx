// components/LatestBlogs.tsx
import BlogCard from './BlogCard'
import { allPosts } from 'contentlayer/generated'
import { format, parseISO } from 'date-fns'

const LatestBlogs: React.FC = () => {
  // Get the latest 5 posts
  const latestPosts = allPosts.slice(0, 5)

  return (
    <section className="py-8 px-4">
      <h1 className="text-xl font-bold mb-6">LATEST THOUGHTS</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {latestPosts.map((post) => (
          <BlogCard
            key={post._raw.flattenedPath}
            title={post.title}
            date={post.date}
            slug={post.url}
            description={post.description}
          />
        ))}
      </div>
    </section>
  )
}

export default LatestBlogs
