import React from 'react';

/**
 * PiArrowLeftDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowLeftDownDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-left-down icon',
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
      <path d="M5.74331 9.77161C5.35593 12.3589 5.30505 14.9797 5.59114 17.5686C5.61568 17.7906 5.71476 17.9885 5.86323 18.137C6.0117 18.2854 6.20955 18.3845 6.43163 18.4091C9.0205 18.6951 11.6413 18.6443 14.2286 18.2569" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.86328 18.1369L18.5912 5.40894" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
