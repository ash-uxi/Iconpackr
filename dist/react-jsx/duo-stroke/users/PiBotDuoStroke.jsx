import React from 'react';

/**
 * PiBotDuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBotDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bot icon',
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
      <path d="M12 2V7M12 7H10C8.13872 7 7.20808 7 6.45492 7.24472C4.93273 7.73931 3.73931 8.93273 3.24472 10.4549C3 11.2081 3 12.1387 3 14C3 15.8613 3 16.7919 3.24472 17.5451C3.73931 19.0673 4.93273 20.2607 6.45492 20.7553C7.20808 21 8.13872 21 10 21H14C15.8613 21 16.7919 21 17.5451 20.7553C19.0673 20.2607 20.2607 19.0673 20.7553 17.5451C21 16.7919 21 15.8613 21 14C21 12.1387 21 11.2081 20.7553 10.4549C20.2607 8.93273 19.0673 7.73931 17.5451 7.24472C16.7919 7 15.8613 7 14 7H12Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M14 13C14 12.4477 14.4477 12 15 12C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14C14.4477 14 14 13.5523 14 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8 13C8 12.4477 8.44772 12 9 12C9.55228 12 10 12.4477 10 13C10 13.5523 9.55228 14 9 14C8.44772 14 8 13.5523 8 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
