import React from 'react';

/**
 * PiChevronBigLeftContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronBigLeftContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-big-left icon',
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
      <path fill="currentColor" d="M9.183 12.51A30.6 30.6 0 0 0 15 18a72 72 0 0 1 0-12 30.6 30.6 0 0 0-5.817 5.49.8.8 0 0 0 0 1.02" opacity=".28"/>
  <path d="M9.183 12.51A30.6 30.6 0 0 0 15 18a72 72 0 0 1 0-12 30.6 30.6 0 0 0-5.817 5.49.8.8 0 0 0 0 1.02"/>
    </svg>
  );
}
