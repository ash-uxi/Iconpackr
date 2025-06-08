import React from 'react';

/**
 * PiFoodMenuBookStroke icon from the stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFoodMenuBookStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'food-menu-book icon',
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
      <path d="M16 12V11C16 8.79086 14.2091 7 12 7M16 12H8M16 12H17M8 12V11C8 8.79086 9.79086 7 12 7M8 12H7M12 7V6M2 8H4M2 16H4M9 16H15M11 22H13C15.8003 22 17.2004 22 18.27 21.455C19.2108 20.9757 19.9757 20.2108 20.455 19.27C21 18.2004 21 16.8003 21 14V10C21 7.19974 21 5.79961 20.455 4.73005C19.9757 3.78924 19.2108 3.02433 18.27 2.54497C17.2004 2 15.8003 2 13 2H11C8.19974 2 6.79961 2 5.73005 2.54497C4.78924 3.02433 4.02433 3.78924 3.54497 4.73005C3 5.79961 3 7.19974 3 10V14C3 16.8003 3 18.2004 3.54497 19.27C4.02433 20.2108 4.78924 20.9757 5.73005 21.455C6.79961 22 8.19974 22 11 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
