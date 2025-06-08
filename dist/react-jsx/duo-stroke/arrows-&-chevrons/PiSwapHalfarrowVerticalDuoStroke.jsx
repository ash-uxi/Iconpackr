import React from 'react';

/**
 * PiSwapHalfarrowVerticalDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSwapHalfarrowVerticalDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'swap-halfarrow-vertical icon',
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
      <path d="M10 3V18M14 21L14 6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 6.88693C7.03704 5.48467 8.24852 4.22522 9.60379 3.13968C9.72005 3.04656 9.86002 3 10 3M18 17.1131C16.963 18.5153 15.7515 19.7748 14.3962 20.8603C14.28 20.9534 14.14 21 14 21" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
