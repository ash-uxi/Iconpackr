import React from 'react';

/**
 * PiArrowLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowLeftDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-left icon',
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
      <path fill={color || "currentColor"} d="M3 12c0-.432.144-.864.429-1.22a31.2 31.2 0 0 1 5.807-5.584A1 1 0 0 1 10.83 6v12a1 1 0 0 1-1.594.804 31.2 31.2 0 0 1-5.807-5.584A1.95 1.95 0 0 1 3 12" /> <path d="M4 12h16" opacity=".28" />
    </svg>
  );
}
