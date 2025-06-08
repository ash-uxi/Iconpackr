import React from 'react';

/**
 * PiShuffleDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShuffleDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'shuffle icon',
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
      <path fill={color || "currentColor"} d="M17.701 13.129a1 1 0 0 0-.505.97l.064.644a23 23 0 0 1 0 4.514l-.064.645a1 1 0 0 0 1.596.898 16 16 0 0 0 2.83-2.727 1.7 1.7 0 0 0 0-2.146 16 16 0 0 0-2.83-2.727 1 1 0 0 0-1.09-.071M18.792 3.2a1 1 0 0 0-1.596.898l.064.645a23 23 0 0 1 0 4.514l-.064.645a1 1 0 0 0 1.596.898 16 16 0 0 0 2.83-2.727 1.7 1.7 0 0 0 0-2.146 16 16 0 0 0-2.83-2.727" /> <path d="M2 17h1.876a6 6 0 0 0 4.915-2.56l3.418-4.88A6 6 0 0 1 17.124 7h1.247M2 7h1.876a6 6 0 0 1 3.969 1.5m5.471 7.137A6 6 0 0 0 17.124 17h1.247" opacity=".28" />
    </svg>
  );
}
