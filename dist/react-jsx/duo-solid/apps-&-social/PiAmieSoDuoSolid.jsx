import React from 'react';

/**
 * PiAmieSoDuoSolid icon from the duo-solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAmieSoDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'amie-so icon',
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
      <path d="M11 14v-4a1 1 0 1 1 2 0v4a1 1 0 1 1-2 0" /> <path fill={color || "currentColor"} d="M8.21 2a6.21 6.21 0 0 0-4.92 10A6.21 6.21 0 0 0 12 20.71 6.21 6.21 0 0 0 20.71 12 6.21 6.21 0 0 0 12 3.29 6.2 6.2 0 0 0 8.21 2" opacity=".28" />
    </svg>
  );
}
