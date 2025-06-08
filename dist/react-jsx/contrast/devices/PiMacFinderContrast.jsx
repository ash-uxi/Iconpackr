import React from 'react';

/**
 * PiMacFinderContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMacFinderContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mac-finder icon',
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
      <path fill="currentColor" d="M2 8a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5z" opacity=".28"/>
  <path d="M7 8v1m10-1v1m0 7a9.5 9.5 0 0 1-5 1.429A9.5 9.5 0 0 1 7 16m6.176-13A23.9 23.9 0 0 0 11 13h4c0 2.782.209 5.475.662 7.994M13.176 3H10c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 5.73C2 6.8 2 8.2 2 11v2c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 21 7.2 21 10 21h4c.618 0 1.168 0 1.662-.006M13.176 3H14c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 6.8 22 8.2 22 11v2c0 2.8 0 4.2-.545 5.27a5 5 0 0 1-2.185 2.185c-.833.425-1.867.518-3.608.54"/>
    </svg>
  );
}
