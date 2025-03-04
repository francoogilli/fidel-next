interface Props {
  className?: string;
  strokeWidth?: string;
}
export default function StarGoldIcon({ className, strokeWidth = "2" }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      className={className}
      strokeWidth={strokeWidth}
      xmlns="http://www.w3.org/2000/svg"
    >
      {" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.625 11.5155C17.265 10.3915 13.858 6.9845 12.734 2.6245L12.25 0.747498L11.766 2.6245C10.642 6.9845 7.23505 10.3915 2.87505 11.5155L0.998047 11.9995L2.87505 12.4845C7.23505 13.6085 10.642 17.0155 11.766 21.3745L12.25 23.2525L12.734 21.3745C13.858 17.0155 17.265 13.6085 21.625 12.4845L23.502 11.9995L21.625 11.5155Z"
        fill="currentColor"
      ></path>{" "}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0011 7.74691C19.0011 6.58491 20.2751 5.24791 21.5001 5.24791C20.3211 5.24791 19.0011 3.89691 19.0011 2.74991C19.0011 3.89691 17.6931 5.24791 16.5031 5.24791C17.6481 5.24791 19.0011 6.57791 19.0011 7.74691Z"
        fill="currentColor"
      ></path>{" "}
    </svg>
  );
}
