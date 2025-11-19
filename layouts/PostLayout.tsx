import Link from '@/components/Link'
import PageTitle from '@/components/PageTitle'
import SectionContainer from '@/components/SectionContainer'
import { BlogSEO } from '@/components/SEO'
import Image from '@/components/Image'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import Comments from '@/components/comments'
import ScrollTopAndComment from '@/components/ScrollTopAndComment'
import ReadingProgress from '@/components/ReadingProgress'
import { CoreContent } from '@/lib/utils/contentlayer'
import { ReactNode } from 'react'
import type { Blog, Authors } from 'contentlayer/generated'

const editUrl = (slug) => `${siteMetadata.siteRepo}/blob/main/data/blog/${slug}.mdx`

const postDateTemplate: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

interface Props {
  content: CoreContent<Blog>
  authorDetails: CoreContent<Authors>[]
  next?: { slug: string; title: string }
  prev?: { slug: string; title: string }
  children: ReactNode
}

export default function PostLayout({ content, authorDetails, next, prev, children }: Props) {
  const { slug, date, title, tags } = content

  return (
    <SectionContainer>
      <BlogSEO
        url={`${siteMetadata.siteUrl}/blog/${slug}`}
        authorDetails={authorDetails}
        {...content}
      />
      <ReadingProgress />
      <ScrollTopAndComment />
      <article>
        <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
          <header className="px-2 pt-6 sm:px-0 xl:pb-6">
            <div className="space-y-1 text-center">
              <dl className="space-y-10">
                <div>
                  <dt className="sr-only">Published on</dt>
                  <dd className="text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 sm:text-base">
                    <time dateTime={date}>
                      {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                    </time>
                  </dd>
                </div>
              </dl>
              <div>
                <PageTitle>{title}</PageTitle>
              </div>
            </div>
          </header>
          <div
            className="divide-y divide-gray-200 pb-8 dark:divide-gray-700 xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
            style={{ gridTemplateRows: 'auto 1fr' }}
          >
            <dl className="px-2 pt-6 pb-10 sm:px-0 xl:border-b xl:border-gray-200 xl:pt-11 xl:dark:border-gray-700">
              <dt className="sr-only">Authors</dt>
              <dd>
                <ul className="flex justify-center space-x-6 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                  {authorDetails.map((author) => (
                    <li className="flex items-center space-x-2" key={author.name}>
                      {author.avatar && (
                        <img
                          src={author.avatar}
                          alt="avatar"
                          loading="lazy"
                          decoding="async"
                          className="h-9 w-9 rounded-full object-cover sm:h-10 sm:w-10"
                        />
                      )}
                      <dl className="whitespace-nowrap text-xs font-medium leading-5 sm:text-sm">
                        <dt className="sr-only">Name</dt>
                        <dd className="text-gray-900 dark:text-gray-100">{author.name}</dd>
                        <dt className="sr-only">Twitter</dt>
                        <dd>
                          {author.twitter && (
                            <Link
                              href={author.twitter}
                              className="text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                            >
                              {author.twitter.replace('https://twitter.com/', '@')}
                            </Link>
                          )}
                        </dd>
                      </dl>
                    </li>
                  ))}
                </ul>
              </dd>
            </dl>
            <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
              <div className="prose prose-sm max-w-none px-2 pt-8 pb-8 dark:prose-dark sm:prose-base sm:px-0 sm:pt-10">
                {children}
              </div>
              <div className="px-2 pt-6 pb-6 text-xs text-gray-700 dark:text-gray-300 sm:px-0 sm:text-sm">
                <Link href={editUrl(slug)} className="transition-colors hover:text-primary-500">
                  {'Xem trên GitHub'}
                </Link>
              </div>
              <Comments frontMatter={content} />
            </div>
            <footer>
              <div className="divide-gray-200 px-2 text-sm font-medium leading-5 dark:divide-gray-700 sm:px-0 xl:col-start-1 xl:row-start-2 xl:divide-y">
                {tags && (
                  <div className="py-4 xl:py-8">
                    <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      Thẻ
                    </h2>
                    <div className="flex flex-wrap gap-1">
                      {tags.map((tag) => (
                        <Tag key={tag} text={tag} />
                      ))}
                    </div>
                  </div>
                )}
                {(next || prev) && (
                  <div className="flex flex-col gap-4 py-4 sm:flex-row sm:justify-between xl:block xl:space-y-8 xl:py-8">
                    {prev && (
                      <div className="flex-1">
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Bài Trước
                        </h2>
                        <div className="text-sm text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${prev.slug}`}>{prev.title}</Link>
                        </div>
                      </div>
                    )}
                    {next && (
                      <div className="flex-1">
                        <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">
                          Bài Tiếp
                        </h2>
                        <div className="text-sm text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400">
                          <Link href={`/blog/${next.slug}`}>{next.title}</Link>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="px-2 pt-4 sm:px-0 xl:pt-8">
                <Link
                  href="/blog"
                  className="text-sm text-primary-500 transition-colors hover:text-primary-600 dark:hover:text-primary-400"
                >
                  &larr; Quay lại Blog
                </Link>
              </div>
            </footer>
          </div>
        </div>
      </article>
    </SectionContainer>
  )
}
