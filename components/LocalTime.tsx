import { useEffect, useState } from 'react'

export default function LocalTime() {
  const [time, setTime] = useState<string>('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const updateTime = () => {
      const now = new Date()
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Ho_Chi_Minh',
        hour12: false,
      }
      const timeStr = now.toLocaleTimeString('vi-VN', options)
      const dateStr = now.toLocaleDateString('vi-VN', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
      })
      setTime(`${timeStr} • ${dateStr}`)
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-white px-2.5 py-1 shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <svg
        className="h-3 w-3 text-teal-500 dark:text-teal-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="whitespace-nowrap text-xs font-medium text-gray-700 dark:text-gray-300">
        {time}
      </span>
    </div>
  )
}
