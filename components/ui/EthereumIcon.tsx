import React from "react";

interface EthereumIconProps {
  fill?: string;
  width?: number | string;
  height?: number | string;
  className?: string;
}

export default function EthereumIcon({
  fill = "#00FFF8",
  width = 11,
  height = 18,
  className,
}: EthereumIconProps) {
  return (
    <svg
      width={width}
      height={height}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M11 10.216 5.5 18 0 10.216l5.5 3.263 5.5-3.262ZM5.5 0l5.496 9.169L5.5 12.43 0 9.17 5.5 0Z"
        fill={fill}
      />
    </svg>
  );
}
