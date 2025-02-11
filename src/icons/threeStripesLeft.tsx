interface ThreeStripesLeftProps {
  strokeColor?: string;
}

export default function ThreeStripesLeft({
  strokeColor = "#cdcfd1",
}: ThreeStripesLeftProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="26"
      fill="none"
      className="animation-1"
      viewBox="0 0 15 30"
    >
      <path stroke={strokeColor} d="M.5 10v10m7-15v20m7-25v30" />
    </svg>
  );
}
