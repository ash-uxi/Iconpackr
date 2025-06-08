import React from 'react';

/**
 * PiGridTableDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGridTableDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'grid-table icon',
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
      <path d="M14.6 3C16.8402 3 17.9603 3 18.816 3.43597C19.5686 3.81947 20.1805 4.43139 20.564 5.18404C21 6.03969 21 7.15979 21 9.4V14.6C21 16.8402 21 17.9603 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.9603 21 16.8402 21 14.6 21H9.4C7.15979 21 6.03968 21 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3 17.9603 3 16.8402 3 14.6L3 9.4C3 7.15979 3 6.03968 3.43597 5.18404C3.81947 4.43139 4.43139 3.81947 5.18404 3.43597C6.03969 3 7.15979 3 9.4 3L14.6 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 15L9 15M9 15H21M9 15V9M9 15L9 21M9 3L9 9M9 9L3 9M9 9L21 9" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
