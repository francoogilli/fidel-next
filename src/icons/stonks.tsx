interface Props {
  className?: string;
  strokeWidth?: string;
}
export default function StonksIcon({ className, strokeWidth = "2" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 11h.009" />
      <path d="M14 15h.009" />
      <path d="M12 6h.009" />
      <path d="M8 10h.009" />
      <path d="M3 21l17 -17" />
      <path d="M3 3v18h18" />
    </svg>
  );
}
