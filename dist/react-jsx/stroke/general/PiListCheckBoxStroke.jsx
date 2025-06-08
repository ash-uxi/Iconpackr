import React from 'react';

/**
 * PiListCheckBoxStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListCheckBoxStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-check-box icon',
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
      <path d="M12 12H21M12 18H21M12 6L21 6M3 16.1047L4.89736 18C5.80992 16.4043 7.07282 15.0366 8.59087 14M4 10H7C7.55228 10 8 9.55228 8 9V6C8 5.44772 7.55228 5 7 5H4C3.44772 5 3 5.44772 3 6V9C3 9.55228 3.44772 10 4 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
