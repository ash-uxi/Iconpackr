import React from 'react';

/**
 * PiBarchartUpContrast icon from the contrast style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBarchartUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'barchart-up icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill="currentColor" d="M15.152 4.235C15 4.602 15 5.068 15 6v6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C13.398 9 12.932 9 12 9s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C9 10.602 9 11.068 9 12v6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C7.398 15 6.932 15 6 15s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 16.602 3 17.068 3 18s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 21 5.068 21 6 21h11.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 3 18.932 3 18 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083" opacity=".28"/>
  <path d="M9 21v-3c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C7.398 15 6.932 15 6 15s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C3 16.602 3 17.068 3 18s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083C4.602 21 5.068 21 6 21zm0 0h6m-6 0v-9c0-.932 0-1.398.152-1.765a2 2 0 0 1 1.083-1.083C10.602 9 11.068 9 12 9s1.398 0 1.765.152a2 2 0 0 1 1.083 1.083C15 10.602 15 11.068 15 12v9m0 0h2.8c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8V6c0-.932 0-1.398-.152-1.765a2 2 0 0 0-1.083-1.083C19.398 3 18.932 3 18 3s-1.398 0-1.765.152a2 2 0 0 0-1.083 1.083C15 4.602 15 5.068 15 6z"/>
    </svg>
  );
}
