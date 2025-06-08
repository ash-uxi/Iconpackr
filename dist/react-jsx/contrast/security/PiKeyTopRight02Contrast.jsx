import React from 'react';

/**
 * PiKeyTopRight02Contrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyTopRight02Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-top-right-02 icon',
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
      <path fill="currentColor" d="M16.243 4.93h2.828v2.828l-2.121 2.12h-1.621a.5.5 0 0 0-.5.5V12l-2.453 2.452a4.5 4.5 0 1 1-2.828-2.828z" opacity=".28"/>
  <path d="M16.243 4.93h2.828v2.828l-2.121 2.12h-1.621a.5.5 0 0 0-.5.5V12l-2.453 2.452a4.5 4.5 0 1 1-2.828-2.828z"/>
  <path d="M8.11 17.304 6.697 15.89a1.25 1.25 0 0 0 1.415 1.414z"/>
    </svg>
  );
}
