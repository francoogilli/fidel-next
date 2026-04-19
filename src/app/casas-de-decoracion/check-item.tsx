interface CheckItemProps {
  children: React.ReactNode
}

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-4 shrink-0 text-[#0ade49]"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span className="text-[#5c5c5c] leading-relaxed">{children}</span>
    </li>
  )
}
