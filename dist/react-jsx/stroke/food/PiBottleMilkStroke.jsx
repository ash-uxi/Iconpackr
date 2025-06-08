import React from 'react';

/**
 * PiBottleMilkStroke icon from the stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBottleMilkStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bottle-milk icon',
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
      <path d="M7 15.0001C7.79175 14.6684 8.64158 14.4976 9.5 14.4976C10.3584 14.4976 11.2083 14.6684 12 15.0001C12.7917 15.3318 13.6416 15.5026 14.5 15.5026C15.3584 15.5026 16.2083 15.3318 17 15.0001" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8 2H16M9 2V4.789C8.99998 5.57879 8.76616 6.3509 8.328 7.008L7.672 7.992C7.23366 8.64939 6.99982 9.42187 7 10.212V20C7 20.5304 7.21071 21.0391 7.58579 21.4142C7.96086 21.7893 8.46957 22 9 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V10.211C17 9.42121 16.7662 8.6491 16.328 7.992L15.672 7.008C15.2337 6.35061 14.9998 5.57813 15 4.788V2" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
