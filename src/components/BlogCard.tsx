// components/BlogCard.tsx
import NextImage from 'next/image'
import Link from 'next/link'
import { format, parseISO } from 'date-fns'

interface BlogCardProps {
  title: string
  date: string
  slug: string
  description: string
}

const BlogCard: React.FC<BlogCardProps> = ({ title, date, slug, description}) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-lg font-semibold mb-2">
        <Link href={`/posts/${slug}`}>{title}</Link>
      </h2>
      <time className="block text-sm text-gray-500 mb-2">
        {format(parseISO(date), 'LLLL d, yyyy')}
      </time>
      <p className="text-gray-700 text-sm">{description}</p>
      <Link href={`/posts/${slug}`} className="text-xs text-blue-600 hover:underline">
        Read more
      </Link>
    </div>
  )
}

export default BlogCard
