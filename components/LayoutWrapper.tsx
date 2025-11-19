import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import LocalTime from './LocalTime'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const LayoutWrapper = ({ children }: Props) => {
  return (
    <>
      <div className="flex min-h-screen flex-col">
        <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white shadow-sm supports-[backdrop-filter]:bg-white/95 supports-[backdrop-filter]:backdrop-blur-md dark:border-gray-800 dark:bg-gray-900 dark:supports-[backdrop-filter]:bg-gray-900/95">
          <div className="mx-auto max-w-3xl px-3 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="flex items-center justify-between gap-2 py-2.5 sm:gap-4 sm:py-4">
              <div className="min-w-0 flex-1">
                <Link href="/" aria-label={siteMetadata.headerTitle}>
                  <div className="flex items-center gap-1.5 sm:gap-2.5">
                    <img
                      src="/static/favicons/favicon-new.png"
                      alt="Logo"
                      className="h-7 w-7 flex-shrink-0 rounded-lg shadow-sm sm:h-9 sm:w-9"
                    />
                    {typeof siteMetadata.headerTitle === 'string' ? (
                      <div className="animate-gradient-x bg-gradient-to-r from-teal-400 via-cyan-500 to-emerald-500 bg-clip-text text-base font-bold leading-tight text-transparent dark:from-teal-300 dark:via-cyan-400 dark:to-emerald-400 sm:text-lg md:text-xl lg:text-2xl">
                        {siteMetadata.headerTitle}
                      </div>
                    ) : (
                      siteMetadata.headerTitle
                    )}
                  </div>
                </Link>
              </div>
              <div className="flex flex-shrink-0 items-center gap-0.5 text-base leading-5 sm:gap-1.5 md:gap-2">
                <div className="hidden xl:block">
                  <LocalTime />
                </div>
                <div className="hidden sm:block">
                  {headerNavLinks.map((link) => (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="rounded-lg px-2 py-1.5 text-sm font-medium text-gray-700 transition-all hover:bg-gray-100 hover:text-primary-500 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-primary-400 md:px-3 md:py-2"
                    >
                      {link.title}
                    </Link>
                  ))}
                </div>
                <ThemeSwitch />
                <MobileNav />
              </div>
            </div>
          </div>
        </header>
        <SectionContainer>
          <main className="mb-auto mt-8">{children}</main>
          <Footer />
        </SectionContainer>
      </div>
    </>
  )
}

export default LayoutWrapper
