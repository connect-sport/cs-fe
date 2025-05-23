import React from "react";

const PickleBallIcon = ({
  size = 24,
  color = "currentColor",
}: {
  size?: number;
  color?: string;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
  >
    <rect x="10" y="20" width="24" height="30" rx="5" ry="5" fill={color} />
    <rect x="17" y="50" width="10" height="14" rx="2" ry="2" fill="#333" />
    <circle
      cx="46"
      cy="18"
      r="10"
      stroke={color}
      strokeWidth="4"
      fill="white"
    />
    <circle cx="42" cy="14" r="1.5" fill={color} />
    <circle cx="48" cy="20" r="1.5" fill={color} />
    <circle cx="44" cy="22" r="1.5" fill={color} />
    <circle cx="50" cy="14" r="1.5" fill={color} />
  </svg>
);

export { PickleBallIcon };
