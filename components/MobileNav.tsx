import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <>
      <button
        type="button"
        className="flex h-10 w-10 items-center justify-center rounded p-1 transition-colors hover:bg-gray-200 dark:hover:bg-gray-700 sm:hidden"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-6 w-6 text-gray-900 dark:text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      {mounted &&
        navShow &&
        createPortal(
          <div className="sm:hidden">
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm"
              style={{ zIndex: 9998 }}
              onClick={onToggleNav}
              aria-hidden="true"
            />
            <div
              className="fixed inset-y-0 right-0 w-full max-w-sm overflow-y-auto bg-white shadow-2xl dark:bg-gray-900 sm:max-w-md"
              style={{ zIndex: 9999 }}
            >
              <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4 dark:border-gray-800">
                <span className="text-lg font-semibold text-gray-900 dark:text-gray-100">Menu</span>
                <button
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  aria-label="Close Menu"
                  onClick={onToggleNav}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-6 w-6 text-gray-900 dark:text-gray-100"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              <nav className="px-6 py-6">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-900 transition-colors hover:bg-gray-100 hover:text-primary-500 dark:text-gray-100 dark:hover:bg-gray-800 dark:hover:text-primary-400"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                ))}
              </nav>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

export default MobileNav
