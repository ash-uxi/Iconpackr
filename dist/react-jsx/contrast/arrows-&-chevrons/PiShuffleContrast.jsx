import React from 'react';

/**
 * PiShuffleContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShuffleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'shuffle icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M18.192 10a15 15 0 0 0 2.654-2.556.7.7 0 0 0 0-.888A15 15 0 0 0 18.192 4l.063.645a24 24 0 0 1 0 4.71zM18.192 20a15 15 0 0 0 2.654-2.556.704.704 0 0 0 0-.888A15 15 0 0 0 18.192 14l.063.645a24 24 0 0 1 0 4.71z"/>
  </g>
  <path d="M2 17h1.876a6 6 0 0 0 4.915-2.56l3.418-4.88A6 6 0 0 1 17.124 7h1.247M2 7h1.876a6 6 0 0 1 3.969 1.5m5.471 7.137A6 6 0 0 0 17.124 17h1.247m0 0a24 24 0 0 1-.116 2.355l-.063.645a15 15 0 0 0 2.654-2.556.7.7 0 0 0 0-.888A15 15 0 0 0 18.192 14l.063.645A24 24 0 0 1 18.371 17m0-10q0 1.18-.116 2.355l-.063.645a15 15 0 0 0 2.654-2.556.7.7 0 0 0 0-.888A15 15 0 0 0 18.192 4l.063.645q.117 1.176.116 2.355"/>
    </svg>
  );
}
