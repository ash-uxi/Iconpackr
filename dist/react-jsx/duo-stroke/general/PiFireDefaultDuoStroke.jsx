import React from 'react';

/**
 * PiFireDefaultDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFireDefaultDuoStroke({ 
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
      <path d="M12.5997 2.125C12.6626 4.51176 10.0034 8.00003 7.99996 8.00003C7.99996 8.00003 7.28797 7.0946 6.69447 6.01481C5.19887 7.92485 4 10.3659 4 12.9995C4 16.9995 6.66667 20.9995 12 20.9995C17.3333 20.9995 20 16.9995 20 12.9995C20 7.55516 14.8768 2.93415 12.5997 2.125Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M14.4047 20.1505C12.7734 21.5315 9.97859 21.2046 8.94573 19.3334C7.29754 16.3475 11.8032 13.2891 13.4087 12.4863C15.0263 13.2951 17.2979 17.7013 14.4047 20.1505Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
