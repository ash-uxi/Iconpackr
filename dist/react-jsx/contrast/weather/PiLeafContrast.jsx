import React from 'react';

/**
 * PiLeafContrast icon from the contrast style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLeafContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'leaf icon',
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
      <path d="M13 10.5s-8 3.5-8 10"/>
  <path fill="currentColor" d="M5.34 18.212C.34 2.712 15.5 7 19 3c3.082 11.5-1.16 19.712-13.66 15.212" opacity=".28"/>
  <path d="M5.34 18.212C.34 2.712 15.5 7 19 3c3.082 11.5-1.16 19.712-13.66 15.212"/>
    </svg>
  );
}
