import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import formatDate from '@/lib/utils/formatDate'
import { sortedBlogPost, allCoreContent } from '@/lib/utils/contentlayer'
import { InferGetStaticPropsType } from 'next'
import NewsletterForm from '@/components/NewsletterForm'
import { allBlogs } from 'contentlayer/generated'

const MAX_DISPLAY = 5

export const getStaticProps = async () => {
  // TODO: move computation to get only the essential frontmatter to contentlayer.config
  const sortedPosts = sortedBlogPost(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return { props: { posts } }
}

export default function Home({ posts }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 px-2 pt-6 pb-8 md:space-y-5 md:px-0">
          <h1 className="text-2xl font-extrabold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl sm:leading-9 md:text-5xl md:leading-12 lg:text-6xl lg:leading-14">
            Bài Viết Mới Nhất
          </h1>
          <p className="text-base leading-6 text-gray-500 dark:text-gray-400 sm:text-lg sm:leading-7">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'Chưa có bài viết nào.'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <li key={slug} className="px-2 py-8 md:px-0 md:py-12">
                <article>
                  <div className="space-y-3 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 md:text-base">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-4 xl:col-span-3">
                      <div className="space-y-4">
                        <div>
                          <h2 className="text-xl font-bold leading-7 tracking-tight sm:text-2xl sm:leading-8">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 transition-colors hover:text-primary-500 dark:text-gray-100 dark:hover:text-primary-400"
                            >
                              {title}
                            </Link>
                          </h2>
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
                      <div className="text-sm font-medium leading-6 sm:text-base">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Đọc "${title}"`}
                        >
                          Đọc thêm &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="tất cả bài viết"
          >
            Tất Cả Bài Viết &rarr;
          </Link>
        </div>
      )}
      {/* Newsletter form đã được ẩn */}
      {/* {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )} */}
    </>
  )
}
