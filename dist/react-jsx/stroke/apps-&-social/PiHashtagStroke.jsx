import React from 'react';

/**
 * PiHashtagStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHashtagStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'hashtag icon',
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
      <path d="M7 20L7.9375 15M7.9375 15L9.0625 9M7.9375 15H14.9375M7.9375 15H3.5M9.0625 9L10 4M9.0625 9L16.0625 9M9.0625 9H4.5M14 20L14.9375 15M14.9375 15L16.0625 9M14.9375 15H19.5M16.0625 9L17 4M16.0625 9H20.5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
