import React from 'react';

/**
 * PiPowerDefaultStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPowerDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'power-default icon',
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
      <path d="M12.0001 8V2M7.55567 4C4.74888 5.56266 2.8501 8.55959 2.8501 12C2.8501 17.0534 6.94669 21.15 12.0001 21.15C17.0535 21.15 21.1501 17.0534 21.1501 12C21.1501 8.55959 19.2513 5.56266 16.4445 4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
