import React from 'react';

/**
 * PiMapPin02DuoSolid icon from the duo-solid style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMapPin02DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'map-pin-02 icon',
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
      <path d="M12 21v-8" opacity=".28" /> <path fill={color || "currentColor"} d="M12 2a6 6 0 1 0 0 12 6 6 0 0 0 0-12" />
    </svg>
  );
}
