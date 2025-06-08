import React from 'react';

/**
 * PiDoorContrast icon from the contrast style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDoorContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'door icon',
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
      <path d="M10 12H8M2 21h20"/>
  <path fill="currentColor" d="M5 17V7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 3 7.6 3 9 3h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 4.9 19 5.6 19 7v10c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.092C17.1 21 16.4 21 15 21H9c-1.4 0-2.1 0-2.635-.273a2.5 2.5 0 0 1-1.093-1.092C5 19.1 5 18.4 5 17" opacity=".28"/>
  <path d="M5 21V7c0-1.4 0-2.1.272-2.635a2.5 2.5 0 0 1 1.093-1.093C6.9 3 7.6 3 9 3h6c1.4 0 2.1 0 2.635.272a2.5 2.5 0 0 1 1.092 1.093C19 4.9 19 5.6 19 7v14"/>
  <path d="M9 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
    </svg>
  );
}
