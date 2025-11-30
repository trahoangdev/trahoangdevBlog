import Link from '@/components/Link'
import Tag from '@/components/Tag'
import { ComponentProps, useState, useEffect } from 'react'
import Pagination from '@/components/Pagination'
import formatDate from '@/lib/utils/formatDate'
import { CoreContent } from '@/lib/utils/contentlayer'
import type { Blog } from 'contentlayer/generated'
import { SkeletonCard } from '@/components/SkeletonLoader'

interface Props {
  posts: CoreContent<Blog>[]
  title: string
  initialDisplayPosts?: CoreContent<Blog>[]
  pagination?: ComponentProps<typeof Pagination>
}

export default function ListLayout({ posts, title, initialDisplayPosts = [], pagination }: Props) {
  const [searchValue, setSearchValue] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(timer)
  }, [])

  const filteredBlogPosts = posts.filter((post) => {
    const searchContent = post.title + post.summary + post.tags.join(' ')
    return searchContent.toLowerCase().includes(searchValue.toLowerCase())
  })

  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && !searchValue ? initialDisplayPosts : filteredBlogPosts

  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 px-2 pt-6 pb-8 md:space-y-5 md:px-0">
          <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9 md:text-5xl md:leading-12 lg:text-6xl lg:leading-14">
            {title}
          </h1>
          <div className="relative w-full max-w-lg">
            <input
              aria-label="Tìm kiếm bài viết"
              type="text"
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="Tìm kiếm bài viết..."
              className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 transition-colors focus:border-primary-500 focus:ring-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100 sm:text-base"
            />
            <svg
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 dark:text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
        <ul>
          {loading
            ? Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="px-2 py-6 md:px-0">
                  <SkeletonCard />
                </li>
              ))
            : !filteredBlogPosts.length
            ? 'Không tìm thấy bài viết nào.'
            : displayPosts.map((post) => {
                const { slug, date, title, summary, tags } = post
                return (
                  <li key={slug} className="px-2 py-6 md:px-0">
                    <article className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 md:text-base">
                          <time dateTime={date}>{formatDate(date)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-3 xl:col-span-3">
                        <div>
                          <h3 className="text-xl font-bold leading-7 tracking-tight sm:text-2xl sm:leading-8">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 transition-colors hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                            >
                              {title}
                            </Link>
                          </h3>
                          <div className="flex flex-wrap gap-1">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-sm text-gray-500 dark:text-gray-400 sm:text-base">
                          {summary}
                        </div>
                      </div>
                    </article>
                  </li>
                )
              })}
        </ul>
      </div>
      {pagination && pagination.totalPages > 1 && !searchValue && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
    </>
  )
}
