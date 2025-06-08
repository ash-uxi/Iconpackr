import React from 'react';

/**
 * PiMapPin02AreaContrast icon from the contrast style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMapPin02AreaContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'map-pin-02-area icon',
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
      <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0 0v6m-5-1.836c-2.989.562-5 1.613-5 2.816 0 1.794 4.477 3.25 10 3.25s10-1.456 10-3.25c0-1.203-2.011-2.254-5-2.816"/>
  <path fill="currentColor" d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0" opacity=".28"/>
    </svg>
  );
}
