import React from 'react';

/**
 * PiThermometerContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiThermometerContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'thermometer icon',
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
      <path d="M12 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7"/>
  <path fill="currentColor" d="M15 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z" opacity=".28"/>
  <path d="M15 5a3 3 0 1 0-6 0v10.354a4 4 0 1 0 6 0z"/>
    </svg>
  );
}
