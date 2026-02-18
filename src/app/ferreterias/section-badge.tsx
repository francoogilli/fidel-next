interface SectionBadgeProps {
  children: React.ReactNode
  tailwindColor?: string
  className?: string
}

export function SectionBadge({ children, tailwindColor, className }: SectionBadgeProps) {
  return (
    <span className={`inline-block rounded-xl bg-${tailwindColor || 'lime-100'} px-4 py-1.5 text-sm font-medium text-primary ${className || ''}`}>
      {children}
    </span>
  )
}
