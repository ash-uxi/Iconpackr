import React from 'react';

/**
 * PiUserArrowUpStroke icon from the stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserArrowUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-arrow-up icon',
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
      <path d="M22 16.8115C21.2598 15.8245 20.401 14.9332 19.4436 14.1574C19.3141 14.0525 19.157 14 19 14M16 16.8115C16.7402 15.8245 17.599 14.9332 18.5564 14.1574C18.6859 14.0525 18.843 14 19 14M19 14V21M15 21H6C4.89543 21 4 20.1046 4 19C4 16.7909 5.79086 15 8 15H12.4297M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
