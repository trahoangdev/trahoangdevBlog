import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { GetStaticProps, InferGetStaticPropsType } from 'next'

export const getStaticProps: GetStaticProps<{ authorDetails }> = async () => {
  const authorDetails = {
    name: siteMetadata.author,
    email: siteMetadata.email,
    github: siteMetadata.github,
    linkedin: siteMetadata.linkedin,
    twitter: siteMetadata.twitter,
  }
  return { props: { authorDetails } }
}

export default function Contact({ authorDetails }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <PageSEO title={`Liên Hệ - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Liên Hệ
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Bạn có thể liên hệ với tôi qua các kênh sau:
          </p>
        </div>
        <div className="container py-12">
          <div className="prose max-w-none pb-8 pt-8 dark:prose-dark xl:col-span-2">
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold">Email</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  <a
                    href={`mailto:${authorDetails.email}`}
                    className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                  >
                    {authorDetails.email}
                  </a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Mạng Xã Hội</h2>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  {authorDetails.github && (
                    <li>
                      <strong>GitHub:</strong>{' '}
                      <a
                        href={authorDetails.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {authorDetails.github}
                      </a>
                    </li>
                  )}
                  {authorDetails.linkedin && (
                    <li>
                      <strong>LinkedIn:</strong>{' '}
                      <a
                        href={authorDetails.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {authorDetails.linkedin}
                      </a>
                    </li>
                  )}
                  {authorDetails.twitter && (
                    <li>
                      <strong>Twitter:</strong>{' '}
                      <a
                        href={authorDetails.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                      >
                        {authorDetails.twitter}
                      </a>
                    </li>
                  )}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold">Gửi Tin Nhắn</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Nếu bạn có câu hỏi hoặc muốn trao đổi về lập trình, đừng ngần ngại liên hệ với
                  tôi qua email. Tôi sẽ cố gắng phản hồi trong thời gian sớm nhất!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
