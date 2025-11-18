import Link from '@/components/Link'

interface Props {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: Props) {
  const prevPage = currentPage - 1 > 0
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div className="space-y-2 pt-6 pb-8 md:space-y-5">
      <nav className="flex justify-between">
        {!prevPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!prevPage}>
            Trước
          </button>
        )}
        {prevPage && (
          <Link href={currentPage - 1 === 1 ? `/blog/` : `/blog/page/${currentPage - 1}`}>
            <button className="transition-colors hover:text-primary-500 dark:hover:text-primary-400">
              Trước
            </button>
          </Link>
        )}
        <span>
          {currentPage} / {totalPages}
        </span>
        {!nextPage && (
          <button className="cursor-auto disabled:opacity-50" disabled={!nextPage}>
            Tiếp
          </button>
        )}
        {nextPage && (
          <Link href={`/blog/page/${currentPage + 1}`}>
            <button className="transition-colors hover:text-primary-500 dark:hover:text-primary-400">
              Tiếp
            </button>
          </Link>
        )}
      </nav>
    </div>
  )
}
