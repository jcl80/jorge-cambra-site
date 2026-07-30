export default function Formula({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose my-6 overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 px-5 py-4 text-center font-serif italic text-gray-800 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200">
      {children}
    </div>
  )
}
