import React from 'react';

/**
 * PiGrid01DuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGrid01DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'grid-01 icon',
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
      <path d="M12 21V12M12 12L12 3M12 12L21 12M12 12L3 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M14.6 3H9.4C7.15979 3 6.03968 3 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3 6.03968 3 7.15979 3 9.4V14.6C3 16.8402 3 17.9603 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C6.03968 21 7.15979 21 9.4 21H14.6C16.8402 21 17.9603 21 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C21 17.9603 21 16.8402 21 14.6V9.4C21 7.15979 21 6.03968 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C17.9603 3 16.8402 3 14.6 3Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
