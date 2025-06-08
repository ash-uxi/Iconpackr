import React from 'react';

/**
 * PiTextQuotesCloseStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextQuotesCloseStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'text-quotes-close icon',
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
      <path d="M10 9.99969C10 11.6565 8.65685 13 7 13C5.34315 13 4 11.6569 4 10C4 8.34315 5.34315 7 7 7C8.65685 7 10 8.34284 10 9.99969ZM10 9.99969C10 13.1823 8.41929 15.9958 6.00012 17.6978M20 9.99969C20 11.6565 18.6569 13 17 13C15.3431 13 14 11.6569 14 10C14 8.34315 15.3431 7 17 7C18.6569 7 20 8.34284 20 9.99969ZM20 9.99969C20 13.1823 18.4193 15.9958 16.0001 17.6978" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
