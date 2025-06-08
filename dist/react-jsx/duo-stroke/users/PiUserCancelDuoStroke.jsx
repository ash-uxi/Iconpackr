import React from 'react';

/**
 * PiUserCancelDuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserCancelDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-cancel icon',
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
      <path d="M12.5299 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H13.354" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21 13L18.5 15.5M18.5 15.5L16 18M18.5 15.5L21 18M18.5 15.5L16 13M15 7C15 9.20914 13.2091 11 11 11C8.79086 11 7 9.20914 7 7C7 4.79086 8.79086 3 11 3C13.2091 3 15 4.79086 15 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
