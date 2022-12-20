import Link from 'next/link'
import { formatDate } from '../../utils/formatDate'

interface CardProps {
  post: {
    title: string
    body: string
    created_at: string
    number: number
  }
}

export function Cards({ post }: CardProps) {
  return (
    <Link
      href={`/posts/${post.number}`}
      className=" bg-base-post w-[414px] h-[258px] rounded-xl hover:border-2 hover:border-base-label"
    >
      <div className="flex justify-between m-8 gap-4">
        <h1 className="font-bold text-xl text-base-title w-[283px] ">
          {post.title}
        </h1>
        <span className="text-sm text-base-span mt-1 text-center">
          {formatDate(post.created_at)}
        </span>
      </div>
      <div className="m-8">
        <p className="text-base text-base-text overflow-clip">
          {post.body.slice(0, 150)}...
        </p>
      </div>
    </Link>
  )
}
