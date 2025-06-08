import React from 'react';

/**
 * PiQueueDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiQueueDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'queue icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M3 15h18M3 20h18" opacity=".28" /> <path fill={color || "currentColor"} d="M6 3a4 4 0 1 0 0 8h12a4 4 0 0 0 0-8z" />
    </svg>
  );
}
