import React from "react";

const BadmintonIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
    <g>
      <ellipse
        cx="24"
        cy="8"
        rx="3"
        ry="3"
        fill="#B0BEC5"
        stroke="#263238"
        strokeWidth="1"
      />
      <rect
        x="7"
        y="21"
        width="14"
        height="2"
        rx="1"
        transform="rotate(-45 7 21)"
        fill="#90CAF9"
        stroke="#1976D2"
        strokeWidth="1"
      />
      <rect
        x="9"
        y="23"
        width="10"
        height="2"
        rx="1"
        transform="rotate(-45 9 23)"
        fill="#90CAF9"
        stroke="#1976D2"
        strokeWidth="1"
      />
      <rect
        x="11"
        y="25"
        width="6"
        height="2"
        rx="1"
        transform="rotate(-45 11 25)"
        fill="#90CAF9"
        stroke="#1976D2"
        strokeWidth="1"
      />
      <rect
        x="13"
        y="27"
        width="2"
        height="2"
        rx="1"
        transform="rotate(-45 13 27)"
        fill="#90CAF9"
        stroke="#1976D2"
        strokeWidth="1"
      />
      <line
        x1="22"
        y1="10"
        x2="10"
        y2="22"
        stroke="#263238"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </g>
  </svg>
);

export default BadmintonIcon;
