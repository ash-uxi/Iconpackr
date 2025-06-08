import React from 'react';

/**
 * PiKeyRightDuoSolid icon from the duo-solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyRightDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-right icon',
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
      <path d="M18 12h4v3m-4-3h-8m8 0v2" opacity=".28" /> <path fill={color || "currentColor"} d="M6 7a5 5 0 1 1 0 10A5 5 0 0 1 6 7" />
    </svg>
  );
}
