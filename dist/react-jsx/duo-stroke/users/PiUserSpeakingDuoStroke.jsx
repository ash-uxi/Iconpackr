import React from 'react';

/**
 * PiUserSpeakingDuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserSpeakingDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-speaking icon',
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
      <path d="M15 15H7C4.79086 15 3 16.7909 3 19C3 20.1046 3.89543 21 5 21H17C18.1046 21 19 20.1046 19 19C19 16.7909 17.2091 15 15 15Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18 3.99999C18.375 4.92642 18.5815 5.93909 18.5815 6.99999C18.5815 8.06089 18.375 9.07355 18 9.99999M20.8006 2C21.5674 3.50013 22 5.19955 22 6.99999C22 8.80043 21.5674 10.4998 20.8006 12M15 6.99999C15 9.20913 13.2091 11 11 11C8.79086 11 7 9.20913 7 6.99999C7 4.79085 8.79086 2.99999 11 2.99999C13.2091 2.99999 15 4.79085 15 6.99999Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
