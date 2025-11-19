import { useEffect, useState } from 'react'

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 z-50 h-1 w-full bg-gray-200 dark:bg-gray-800">
      <div
        className="h-full bg-gradient-to-r from-teal-500 to-emerald-500 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
