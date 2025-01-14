interface Props {
  className?: string;
  stroke?: string;
}

export default function PlayStore({ className,stroke }: Props) {
  return (
    <svg
      fill="#ffffff"
      height="200px"
      width="200px"
      version="1.1"
      id="Icons"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 32 32"
      stroke={stroke}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M17,14.5l4.2-4.5L4.9,1.2C4.8,1.1,4.6,1.1,4.3,1L17,14.5z"></path>{" "}
          <path d="M23,21l5.9-3.2c0.7-0.4,1.1-1,1.1-1.8s-0.4-1.5-1.1-1.8L23,11l-4.7,5L23,21z"></path>{" "}
          <path d="M2.4,1.9C2.1,2.2,2,2.6,2,3V29c0,0.4,0.1,0.8,0.4,1.2L15.6,16L2.4,1.9z"></path>{" "}
          <path d="M17,17.5L4.3,31c0.2,0,0.4-0.1,0.6-0.2L21.2,22L17,17.5z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
