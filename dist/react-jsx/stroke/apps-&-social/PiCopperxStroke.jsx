import React from 'react';

/**
 * PiCopperxStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCopperxStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'copperx icon',
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
      <path d="M20.6469 9C19.405 5.42012 16.0027 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C16.0027 21.1501 19.405 18.5801 20.6469 15.0002M13.0001 12.0001C13.0001 12.5524 12.5524 13.0001 12.0001 13.0001C11.4478 13.0001 11.0001 12.5524 11.0001 12.0001C11.0001 11.4478 11.4478 11.0001 12.0001 11.0001C12.5524 11.0001 13.0001 11.4478 13.0001 12.0001Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
