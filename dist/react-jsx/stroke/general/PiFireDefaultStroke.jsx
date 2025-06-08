import React from 'react';

/**
 * PiFireDefaultStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFireDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'fire-default icon',
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
      <path d="M12 20.9995C6.66667 20.9995 4 16.9995 4 12.9995C4 10.3659 5.19887 7.92485 6.69447 6.01481C7.28797 7.0946 7.99996 8.00003 7.99996 8.00003C10.0034 8.00003 12.6626 4.51176 12.5997 2.125C14.8768 2.93415 20 7.55516 20 12.9995C20 16.9995 17.3333 20.9995 12 20.9995ZM12 20.9995C12.8627 20.999 13.7325 20.72 14.4047 20.1509C17.2979 17.7017 15.0263 13.2955 13.4087 12.4868C11.8032 13.2895 7.29753 16.348 8.94572 19.3339C9.55296 20.4339 10.7692 21.0003 12 20.9995Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
