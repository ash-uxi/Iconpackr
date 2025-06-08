import React from 'react';

/**
 * PiArrowLeftCircleContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowLeftCircleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-left-circle icon',
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
      <path d="M11.949 16a20.3 20.3 0 0 1-3.807-3.604A.63.63 0 0 1 8 12m3.949-4a20.3 20.3 0 0 0-3.807 3.604A.63.63 0 0 0 8 12m0 0h8m-4-9.15a9.15 9.15 0 1 1 0 18.3 9.15 9.15 0 0 1 0-18.3"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 0-18.3 0 9.15 9.15 0 0 0 18.3 0" opacity=".28"/>
    </svg>
  );
}
