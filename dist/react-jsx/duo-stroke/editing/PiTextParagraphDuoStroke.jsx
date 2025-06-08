import React from 'react';

/**
 * PiTextParagraphDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextParagraphDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'text-paragraph icon',
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
      <path d="M13 3H9.02914C5.69934 3 3 5.69934 3 9.02914C3 12.3589 5.69934 15.0583 9.02914 15.0583H13M13 3V15.0583M13 3H21M13 21V15.0583" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M18 3V21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
