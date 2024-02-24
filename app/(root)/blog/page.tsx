import Link from 'next/link'
import  { getBlogPosts } from '../../../utils/blogs'

const page = () => {
  let allPosts = getBlogPosts()

  return (
    <div className='flex flex-col text-start'>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      <div>
        {allPosts.map((post) => (
          <Link
              key={post.slug}
              className="flex flex-col space-y-1 mb-4"
              href={`/blog/${post.slug}`}
            >
              <div className="w-full flex flex-col">
                <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                  {post.metadata.title}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm">
                  {post.metadata.publishedAt}
                </p>
              </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default page