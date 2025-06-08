import React from 'react';

/**
 * PiAwardMedalDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAwardMedalDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'award-medal icon',
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
      <path fill={color || "currentColor"} d="M12 1a8 8 0 1 0 0 16 8 8 0 0 0 0-16" /> <path d="M16.365 14.473 18 22c-4.286-2.664-7.714-2.664-12 0l1.635-7.527" opacity=".28" />
    </svg>
  );
}
