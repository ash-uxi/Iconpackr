import React from 'react';

/**
 * PiEarContrast icon from the contrast style in medical category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEarContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ear icon',
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
      <path fill="currentColor" d="M13.526 2.666a6.41 6.41 0 0 1 2.968 12.089c-.685.358-1.028.537-1.135.644-.164.165-.131.115-.218.331-.056.14-.09.595-.16 1.503-.168 2.204-2.008 4.167-4.413 4.167a4.437 4.437 0 0 1-4.405-4.97c.264-2.21.954-5.129.954-7.355a6.41 6.41 0 0 1 6.409-6.409" opacity=".28"/>
  <path d="M13.526 2.666a6.41 6.41 0 0 1 2.968 12.089c-.685.358-1.028.537-1.135.644-.164.165-.131.115-.218.331-.056.14-.09.595-.16 1.503-.168 2.204-2.008 4.167-4.413 4.167a4.437 4.437 0 0 1-4.405-4.97c.264-2.21.954-5.129.954-7.355a6.41 6.41 0 0 1 6.409-6.409"/>
  <path d="M16.531 9.058a2.975 2.975 0 1 0-5.95 0c0 .798-.047 1.552-.182 2.449 2.875.77 2.381 4.196-.37 3.82"/>
    </svg>
  );
}
