import React from 'react';

/**
 * PiDumbbellStroke icon from the stroke style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDumbbellStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'dumbbell icon',
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
      <path d="M9 11H15M5 9H4C2.89543 9 2 9.89543 2 11C2 12.1046 2.89543 13 4 13H5M19 13H20C21.1046 13 22 12.1046 22 11C22 9.89543 21.1046 9 20 9H19M19 13V7C19 5.89543 18.1046 5 17 5C15.8954 5 15 5.89543 15 7V15C15 16.1046 15.8954 17 17 17C18.1046 17 19 16.1046 19 15V13ZM7 17C8.10457 17 9 16.1046 9 15V7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7V15C5 16.1046 5.89543 17 7 17Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
