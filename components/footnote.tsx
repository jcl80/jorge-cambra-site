export default function Footnote({ children }: { children: React.ReactNode }) {
  return (
    <span className="group relative whitespace-nowrap">
      <sup className="footnote-marker cursor-help text-blue-600 no-underline dark:text-blue-400" />
      <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 w-64 -translate-x-1/2 whitespace-normal rounded-lg bg-zinc-900 px-3 py-2 text-left align-baseline text-xs font-normal normal-case leading-snug text-zinc-100 opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 dark:bg-zinc-100 dark:text-zinc-900">
        {children}
      </span>
    </span>
  )
}
