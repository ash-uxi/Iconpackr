import React from 'react';

/**
 * PiTextQuotesCloseContrast icon from the contrast style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextQuotesCloseContrast({ 
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
      <path d="M10 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0a9.4 9.4 0 0 1-4 7.698M20 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0a9.4 9.4 0 0 1-4 7.698"/>
  <path fill="currentColor" fillRule="evenodd" d="M7 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6m10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6" clipRule="evenodd" opacity=".28"/>
    </svg>
  );
}
