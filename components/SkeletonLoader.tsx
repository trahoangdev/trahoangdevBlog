export const SkeletonCard = () => (
  <div className="animate-pulse">
    <div className="mb-4 h-48 rounded-lg bg-gray-200 dark:bg-gray-700" />
    <div className="mb-2 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="mb-3 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
    <div className="mb-2 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="flex gap-2">
      <div className="h-6 w-16 rounded-full bg-gray-200 dark:bg-gray-700" />
      <div className="h-6 w-20 rounded-full bg-gray-200 dark:bg-gray-700" />
    </div>
  </div>
)

export const SkeletonPost = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 w-1/4 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="h-12 w-3/4 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="space-y-2">
      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  </div>
)

export const SkeletonList = ({ count = 3 }: { count?: number }) => (
  <div className="space-y-8">
    {Array.from({ length: count }).map((_, i) => (
      <SkeletonCard key={i} />
    ))}
  </div>
)

export const SkeletonProject = () => (
  <div className="animate-pulse">
    <div className="mb-4 h-64 rounded-lg bg-gray-200 dark:bg-gray-700" />
    <div className="mb-3 h-7 w-2/3 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
    <div className="mb-4 h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="flex gap-2">
      <div className="h-8 w-24 rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-8 w-24 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  </div>
)

export const SkeletonContent = () => (
  <div className="animate-pulse space-y-6">
    <div className="h-10 w-1/2 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="space-y-3">
      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
    <div className="h-8 w-1/3 rounded bg-gray-200 dark:bg-gray-700" />
    <div className="space-y-3">
      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-full rounded bg-gray-200 dark:bg-gray-700" />
      <div className="h-4 w-4/5 rounded bg-gray-200 dark:bg-gray-700" />
    </div>
  </div>
)
