import React from 'react';

/**
 * PiDoubleChevronDownContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDoubleChevronDownContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'double-chevron-down icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M11.702 16.894A20.4 20.4 0 0 1 8 13l2.205.165c1.195.09 2.395.09 3.59 0L16 13a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0M11.702 10.894A20.4 20.4 0 0 1 8 7l2.205.165c1.195.09 2.395.09 3.59 0L16 7a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0"/>
  </g>
  <path d="M11.702 10.894A20.4 20.4 0 0 1 8 7l2.205.165c1.195.09 2.395.09 3.59 0L16 7a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0M11.702 16.894A20.4 20.4 0 0 1 8 13l2.205.165c1.195.09 2.395.09 3.59 0L16 13a20.4 20.4 0 0 1-3.702 3.894.47.47 0 0 1-.596 0"/>
    </svg>
  );
}
