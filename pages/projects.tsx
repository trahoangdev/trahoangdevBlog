import { useState, useEffect } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import { SkeletonProject } from '@/components/SkeletonLoader'

export default function Projects() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timer)
  }, [])
  return (
    <>
      <PageSEO title={`Dự Án - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Dự Án
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Portfolio các dự án phát triển phần mềm, từ web applications đến network programming.
            Mỗi dự án thể hiện kỹ năng kỹ thuật và khả năng giải quyết vấn đề thực tế.
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <div key={i} className="w-full p-4 md:w-1/2">
                    <SkeletonProject />
                  </div>
                ))
              : projectsData.map((d) => (
                  <Card
                    key={d.title}
                    title={d.title}
                    description={d.description}
                    imgSrc={d.imgSrc}
                    href={d.href}
                  />
                ))}
          </div>
        </div>
      </div>
    </>
  )
}
