import React from 'react';

/**
 * PiBulbDefaultSolid icon from the solid style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBulbDefaultSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bulb-default icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M4 9.73684C4 5.42813 7.61818 2 12 2C16.3818 2 20 5.42813 20 9.73684C20 12.0938 18.9101 14.1967 17.2094 15.6089C16.6623 16.0632 16.2959 16.5451 16.1644 17.0513L15.8846 18.1286C15.5983 19.2306 14.6035 20 13.4649 20H10.5351C9.3965 20 8.40172 19.2306 8.11544 18.1286L7.8356 17.0513C7.70411 16.5451 7.33765 16.0632 6.7906 15.6089C5.08994 14.1967 4 12.0938 4 9.73684ZM11 11C10.4477 11 10 11.4477 10 12C10 12.5523 10.4477 13 11 13V16C11 16.5523 11.4477 17 12 17C12.5523 17 13 16.5523 13 16V13C13.5523 13 14 12.5523 14 12C14 11.4477 13.5523 11 13 11H11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M9 22C9 21.4477 9.44772 21 10 21H14C14.5523 21 15 21.4477 15 22C15 22.5523 14.5523 23 14 23H10C9.44772 23 9 22.5523 9 22Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
