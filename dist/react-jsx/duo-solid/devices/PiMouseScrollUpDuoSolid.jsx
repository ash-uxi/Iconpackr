import React from 'react';

/**
 * PiMouseScrollUpDuoSolid icon from the duo-solid style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseScrollUpDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-scroll-up icon',
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
      <path fill={color || "currentColor"} d="M12 2a8 8 0 0 0-8 8v4a8 8 0 1 0 16 0v-4a8 8 0 0 0-8-8" opacity=".28" /> <path d="M14 10.5a10 10 0 0 0-1.704-1.77.47.47 0 0 0-.592 0A10 10 0 0 0 10 10.5" />
    </svg>
  );
}
