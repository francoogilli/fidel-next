import { CircleCheck } from "lucide-react"

interface CheckItemProps {
  children: React.ReactNode
}

export function CheckItem({ children }: CheckItemProps) {
  return (
    <li className="flex items-start gap-3">
      <CircleCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
      <span className="text-muted-foreground leading-relaxed">{children}</span>
    </li>
  )
}
