import React from 'react';

/**
 * PiArrowLeftUpStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowLeftUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-left-up icon',
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
      <path d="M14.2286 5.74331C11.6413 5.35593 9.0205 5.30505 6.43163 5.59114C6.20955 5.61568 6.0117 5.71476 5.86323 5.86323M5.74331 14.2286C5.35593 11.6413 5.30505 9.0205 5.59114 6.43163C5.61568 6.20955 5.71476 6.0117 5.86323 5.86323M5.86323 5.86323L18.5912 18.5912" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
