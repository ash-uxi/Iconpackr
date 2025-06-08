import React from 'react';

/**
 * PiCampFireStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCampFireStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'camp-fire icon',
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
      <path d="M2 21L12 5.16667M12 5.16667L14 2M12 5.16667L22 21M12 5.16667L10 2M10.9999 17.0001C11.5933 17.0001 12.3399 15.4865 12.6161 14.1923C13.5567 14.7619 14.9999 16.2825 14.9999 18.0324C14.9999 19.5158 13.9999 20.9992 12 20.9992C9.99999 20.9992 9 19.5158 9 18.0324C9 17.1477 9.36888 16.3216 9.85521 15.6474C10.3238 16.3136 10.9999 17.0001 10.9999 17.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
