interface Props {
  className?: string;
  strokeWidth?: string;
}
export default function CheckSquareIcon({ className, strokeWidth }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      version="1.1"
      className={className}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <title>Iconly/Bold/Tick Square</title>
      <g
        id="Iconly/Bold/Tick-Square"
        stroke="none"
        strokeWidth="1.5"
        fill="none"
        fillRule="evenodd"
      >
        <g
          id="Tick-Square"
          transform="translate(2.000100, 1.999900)"
          fill="currentColor"
          fillRule="nonzero"
        >
          <path d="M14.34,-2.84217094e-14 C17.73,-2.84217094e-14 20,2.38 20,5.92 L20,5.92 L20,14.091 C20,17.62 17.73,20 14.34,20 L14.34,20 L5.67,20 C2.28,20 0,17.62 0,14.091 L0,14.091 L0,5.92 C0,2.38 2.28,-2.84217094e-14 5.67,-2.84217094e-14 L5.67,-2.84217094e-14 Z M14.18,7 C13.84,6.66 13.28,6.66 12.94,7 L12.94,7 L8.81,11.13 L7.06,9.38 C6.72,9.04 6.16,9.04 5.82,9.38 C5.48,9.72 5.48,10.27 5.82,10.62 L5.82,10.62 L8.2,12.99 C8.37,13.16 8.59,13.24 8.81,13.24 C9.04,13.24 9.26,13.16 9.43,12.99 L9.43,12.99 L14.18,8.24 C14.52,7.9 14.52,7.35 14.18,7 Z"></path>
        </g>
      </g>
    </svg>
  );
}
