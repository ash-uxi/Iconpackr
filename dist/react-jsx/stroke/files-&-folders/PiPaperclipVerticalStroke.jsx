import React from 'react';

/**
 * PiPaperclipVerticalStroke icon from the stroke style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPaperclipVerticalStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'paperclip-vertical icon',
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
      <path d="M18 9L18 16C18 19.3137 15.3137 22 12 22C8.68629 22 6 19.3137 6 16V6C6 3.79086 7.79086 2 10 2C12.2091 2 14 3.79086 14 6L14 16C14 17.1046 13.1046 18 12 18C10.8954 18 10 17.1046 10 16L10 7" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
