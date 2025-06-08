import React from 'react';

/**
 * PiMacbookContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMacbookContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'macbook icon',
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
      <path d="M21 16V8.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 4 17.88 4 16.2 4H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 6.28 3 7.12 3 8.8V16m18 0h-6l-1 1H9.5l-1-1H3m18 0a1 1 0 0 1 1 1 3 3 0 0 1-3 3H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1M13 4.007V5h-2v-.993"/>
  <path fill="currentColor" d="M22 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.5l1 1H14l1-1h6a1 1 0 0 1 1 1" opacity=".28"/>
    </svg>
  );
}
