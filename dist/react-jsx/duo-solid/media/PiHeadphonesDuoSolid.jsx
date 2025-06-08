import React from 'react';

/**
 * PiHeadphonesDuoSolid icon from the duo-solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeadphonesDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'headphones icon',
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
      <path fill={color || "currentColor"} d="M19.638 11.716a3.38 3.38 0 0 0-4.178 2.316L14.41 17.69a3.378 3.378 0 0 0 6.494 1.862l1.05-3.657a3.38 3.38 0 0 0-2.317-4.179" /> <path d="M3.024 15.669a9.5 9.5 0 0 1-.536-3.157 9.512 9.512 0 0 1 19.024 0 9.5 9.5 0 0 1-.526 3.128" opacity=".28" /> <path fill={color || "currentColor"} d="M8.54 14.032a3.378 3.378 0 0 0-6.495 1.863l1.05 3.657a3.378 3.378 0 1 0 6.493-1.862z" />
    </svg>
  );
}
