import React from 'react';

/**
 * PiUserBotStroke icon from the stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserBotStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-bot icon',
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
      <path d="M12 5H10C8.89543 5 8 5.89543 8 7V9C8 10.1046 8.89543 11 10 11H14C15.1046 11 16 10.1046 16 9V7C16 5.89543 15.1046 5 14 5H12ZM12 5V3M8 15C5.79086 15 4 16.7909 4 19C4 20.1046 4.89543 21 6 21H18C19.1046 21 20 20.1046 20 19C20 16.7909 18.2091 15 16 15H8Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
