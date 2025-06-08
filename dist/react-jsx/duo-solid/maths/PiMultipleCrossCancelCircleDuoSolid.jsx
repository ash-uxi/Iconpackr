import React from 'react';

/**
 * PiMultipleCrossCancelCircleDuoSolid icon from the duo-solid style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMultipleCrossCancelCircleDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'multiple-cross-cancel-circle icon',
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
      <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12c0 5.605 4.544 10.15 10.15 10.15 5.605 0 10.15-4.544 10.15-10.15S17.605 1.85 12 1.85" opacity=".28" /> <path d="M8.9 15.1 12 12m0 0 3.1-3.1M12 12 8.9 8.9M12 12l3.1 3.1" />
    </svg>
  );
}
