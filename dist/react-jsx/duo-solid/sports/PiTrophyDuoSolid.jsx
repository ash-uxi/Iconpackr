import React from 'react';

/**
 * PiTrophyDuoSolid icon from the duo-solid style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTrophyDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'trophy icon',
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
      <path d="M17.2 12.996A5 5 0 0 0 22 8V6.6A1.6 1.6 0 0 0 20.4 5h-2.405M6.005 5H3.6A1.6 1.6 0 0 0 2 6.6V8a5 5 0 0 0 4.8 4.996M8 21h4m0 0h4m-4 0v-5" opacity=".28" /> <path fill={color || "currentColor"} d="M8.5 2c-.458 0-.851 0-1.2.083A3 3 0 0 0 5.083 4.3c-.054.226-.07.448-.078.67Q5 5.23 5 5.585V10a6.998 6.998 0 0 0 7 7 7 7 0 0 0 7-7V5.586q.001-.356-.005-.617a3.3 3.3 0 0 0-.078-.67A3 3 0 0 0 16.7 2.084c-.349-.084-.742-.084-1.2-.083z" />
    </svg>
  );
}
