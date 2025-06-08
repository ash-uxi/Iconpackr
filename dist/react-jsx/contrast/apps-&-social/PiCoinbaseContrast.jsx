import React from 'react';

/**
 * PiCoinbaseContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCoinbaseContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'coinbase icon',
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
      <path fill="currentColor" d="M8.25 12a3.75 3.75 0 0 0 7.118 1.65h5.481a9 9 0 1 1 0-3.3h-5.48A3.75 3.75 0 0 0 8.25 12" opacity=".28"/>
  <path d="M8.25 12a3.75 3.75 0 0 0 7.118 1.65h5.481a9 9 0 1 1 0-3.3h-5.48A3.75 3.75 0 0 0 8.25 12"/>
    </svg>
  );
}
