import React from 'react';

/**
 * PiHeadingH4Stroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeadingH4Stroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'heading-h4 icon',
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
      <path d="M4 12H12M4 18V6M12 18V6M17 10L16.2392 13.8039C16.1155 14.4227 16.5888 15 17.2198 15H21M21 15V12M21 15V18" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
