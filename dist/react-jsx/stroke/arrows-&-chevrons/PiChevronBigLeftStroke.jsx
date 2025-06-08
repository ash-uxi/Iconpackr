import React from 'react';

/**
 * PiChevronBigLeftStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronBigLeftStroke({ 
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
      <path d="M15 18.0005C12.8192 16.4235 10.8636 14.5776 9.18284 12.5106C8.93905 12.2108 8.93905 11.7902 9.18284 11.4904C10.8636 9.42342 12.8192 7.5775 15 6.00049" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
