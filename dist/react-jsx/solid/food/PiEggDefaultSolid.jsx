import React from 'react';

/**
 * PiEggDefaultSolid icon from the solid style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEggDefaultSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'egg-default icon',
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
      <path d="M12.0002 1.5C10.6599 1.5 9.4637 2.11873 8.46744 2.98621C7.47017 3.85458 6.60724 5.02644 5.90255 6.28743C4.503 8.79181 3.61133 11.8617 3.61133 14.1111C3.61133 18.7442 7.36716 22.5 12.0002 22.5C16.6333 22.5 20.3891 18.7442 20.3891 14.1111C20.3891 11.8617 19.4974 8.79181 18.0979 6.28743C17.3932 5.02644 16.5303 3.85458 15.533 2.98621C14.5367 2.11873 13.3406 1.5 12.0002 1.5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
