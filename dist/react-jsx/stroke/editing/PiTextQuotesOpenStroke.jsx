import React from 'react';

/**
 * PiTextQuotesOpenStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextQuotesOpenStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'text-quotes-open icon',
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
      <path d="M14 13.9979C14 12.3411 15.3431 10.9976 17 10.9976C18.6569 10.9976 20 12.3408 20 13.9976C20 15.6545 18.6569 16.9976 17 16.9976C15.3431 16.9976 14 15.6548 14 13.9979ZM14 13.9979C14 10.8153 15.5807 8.00181 17.9999 6.2998M4 13.9979C4 12.3411 5.34314 10.9976 7 10.9976C8.65685 10.9976 10 12.3408 10 13.9976C10 15.6545 8.65685 16.9976 7 16.9976C5.34314 16.9976 4 15.6548 4 13.9979ZM4 13.9979C4 10.8153 5.58071 8.00181 7.99988 6.2998" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
