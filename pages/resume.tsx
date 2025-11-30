import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import SocialIcon from '@/components/social-icons'
import Link from '@/components/Link'

export default function Resume() {
  return (
    <>
      <PageSEO
        title={`Resume - ${siteMetadata.author}`}
        description={`Resume / CV của ${siteMetadata.author}`}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Resume / CV
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Thông tin chi tiết về kỹ năng, kinh nghiệm và chứng chỉ chuyên môn
          </p>
        </div>

        <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">
          {/* Contact Info */}
          <div className="mb-8 rounded-lg border-2 border-gray-200 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <h2 className="mt-0 text-2xl font-bold">{siteMetadata.author}</h2>
            <p className="mb-3 text-gray-600 dark:text-gray-400">Software Engineer | Developer</p>
            <div className="flex items-center gap-3">
              <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
              <SocialIcon kind="github" href={siteMetadata.github} size={6} />
              <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
              <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
            </div>
          </div>

          {/* Resume Content - Edit in data/resume.mdx */}
          <section className="mb-6">
            <h2>Tóm Tắt</h2>
            <p>
              Sinh viên năm cuối ngành Công nghệ Thông tin với nền tảng vững về Java và JavaScript.
              Tập trung vào Backend Development, Network Programming và xây dựng RESTful APIs. Có
              khả năng tự học, làm việc nhóm và đam mê chia sẻ kiến thức qua technical blog.
            </p>
          </section>

          <section className="mb-6">
            <h2>Học Vấn</h2>
            <p>
              <strong>Đại học Công nghệ TP.HCM (HUTECH)</strong>
              <br />
              Kỹ Sư Công nghệ Phần Mềm | 2022 - 2026
            </p>
          </section>

          <section className="mb-6">
            <h2>Kỹ Năng Kỹ Thuật</h2>

            <h3 className="text-base">Ngôn ngữ lập trình</h3>
            <p>Java, JavaScript/TypeScript, SQL, NoSQL</p>

            <h3 className="text-base">Backend</h3>
            <p>Java Core, Socket Programming (TCP/IP), RESTful API, JDBC, Spring Boot (basic)</p>

            <h3 className="text-base">Frontend</h3>
            <p>HTML/CSS, JavaScript ES6+, React.js, Next.js, Tailwind CSS</p>

            <h3 className="text-base">Database</h3>
            <p>MySQL, PostgreSQL, MongoDB</p>

            <h3 className="text-base">Tools & Others</h3>
            <p>Git/GitHub, VS Code, IntelliJ IDEA, Postman, Docker (basic), AWS (basic)</p>
          </section>

          <section className="mb-6">
            <h2>Dự Án Cá Nhân</h2>

            <h3>Technical Blog Platform</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Next.js, TypeScript, Tailwind CSS | 2025
            </p>
            <ul>
              <li>Xây dựng blog cá nhân để chia sẻ kiến thức về Java và JavaScript</li>
              <li>Tích hợp MDX cho nội dung, syntax highlighting và SEO optimization</li>
              <li>Deploy lên GitHub Pages với CI/CD tự động</li>
            </ul>

            <h3>Java Socket Chat Application</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Java, Socket Programming | 2025
            </p>
            <ul>
              <li>Phát triển ứng dụng chat Client-Server với Java Socket API</li>
              <li>Xử lý đa luồng để hỗ trợ nhiều client đồng thời</li>
              <li>Triển khai giao thức TCP/IP và xử lý exceptions</li>
            </ul>

            <p className="print:hidden">
              <Link href="/projects" className="text-primary-500 hover:text-primary-600">
                → Xem thêm dự án
              </Link>
            </p>
          </section>

          <section className="mb-6">
            <h2>Chứng Chỉ</h2>
            <ul>
              <li>JavaScript Essentials 1 - Cisco Networking Academy (2025)</li>
              <li>JavaScript Essentials 2 - Cisco Networking Academy (2025)</li>
              <li>Networking Basics - Cisco Networking Academy (2025)</li>
              <li>AWS Academy Cloud Security Foundations - Amazon Web Services (2025)</li>
            </ul>
            <p className="print:hidden">
              <Link href="/about#certificates" className="text-primary-500 hover:text-primary-600">
                → Xem badges chi tiết
              </Link>
            </p>
          </section>

          <section className="mb-6">
            <h2>Mục Tiêu Nghề Nghiệp</h2>
            <p>
              Tìm kiếm vị trí Junior Backend Developer hoặc Frontend Developer để áp dụng kiến thức
              đã học và phát triển kỹ năng thực tế. Mong muốn làm việc trong môi trường năng động,
              học hỏi từ senior developers và đóng góp vào các dự án có ý nghĩa. Định hướng dài hạn
              là trở thành Backend Engineer chuyên sâu về Distributed Systems và Network
              Programming.
            </p>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          header,
          footer,
          nav,
          button,
          .print\\:hidden {
            display: none !important;
          }

          body {
            background: white !important;
            color: black !important;
          }

          .divide-y > * {
            border: none !important;
            padding-top: 0 !important;
          }

          .space-y-2.pt-6.pb-8 {
            display: none !important;
          }

          .prose {
            max-width: 100% !important;
          }

          .mb-8.rounded-lg {
            border: 1px solid #e5e7eb !important;
            background: white !important;
            box-shadow: none !important;
          }

          h2 {
            margin-top: 0.75rem !important;
            margin-bottom: 0.5rem !important;
          }

          h3 {
            margin-top: 0.5rem !important;
            margin-bottom: 0.25rem !important;
          }

          section,
          .mb-6 {
            margin-bottom: 0.75rem !important;
          }

          ul {
            margin: 0.25rem 0 0.5rem 0 !important;
          }

          li {
            margin-bottom: 0.15rem !important;
          }

          p {
            margin: 0.25rem 0 0.5rem 0 !important;
          }

          a {
            text-decoration: none !important;
            color: #0066cc !important;
          }

          .dark\\:bg-gray-800,
          .dark\\:border-gray-700 {
            background: white !important;
            border-color: #e5e7eb !important;
          }

          .dark\\:text-gray-400 {
            color: #1f2937 !important;
          }

          svg {
            width: 18px !important;
            height: 18px !important;
          }
        }

        @page {
          margin: 1.5cm;
          size: A4 portrait;
        }
      `}</style>
    </>
  )
}
