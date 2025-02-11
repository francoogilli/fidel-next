interface ThreeStripesRightProps {
  strokeColor?: string;
}

export default function ThreeStripesRight({ strokeColor = "#cdcfd1" }: ThreeStripesRightProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="26"
      fill="none"
      className="animation-1"
      viewBox="0 0 15 30"
    >
      <path stroke={strokeColor} d="M14.5 10v10m-7-15v20M.5 0v30" />
    </svg>
  );
}
