import React from 'react';

/**
 * PiListCheckDoubleStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListCheckDoubleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-check-double icon',
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
      <path d="M12 12H21M12 18H21M12 6L21 6M3 8.10466L4.89736 10C5.80992 8.40431 7.07282 7.0366 8.59087 6M3 16.1047L4.89736 18C5.80992 16.4043 7.07282 15.0366 8.59087 14" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
