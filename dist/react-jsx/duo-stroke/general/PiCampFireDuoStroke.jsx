import React from 'react';

/**
 * PiCampFireDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCampFireDuoStroke({ 
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
      <path d="M12.6161 14.1914C12.3399 15.4856 11.5933 16.9992 10.9999 16.9992C10.9999 16.9992 10.3238 16.3127 9.85521 15.6465C9.36888 16.3207 9 17.1468 9 18.0315C9 19.5149 9.99999 20.9983 12 20.9983C13.9999 20.9983 14.9999 19.5149 14.9999 18.0315C14.9999 16.2816 13.5567 14.761 12.6161 14.1914Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2 21L12 5.16667M12 5.16667L14 2M12 5.16667L22 21M12 5.16667L10 2" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
