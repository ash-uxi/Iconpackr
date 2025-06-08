import React from 'react';

/**
 * PiFuelPumpGasContrast icon from the contrast style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFuelPumpGasContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'fuel-pump-gas icon',
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
      <path d="M11.5 6h-5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h5a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5"/>
  <path fill="currentColor" d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" opacity=".28"/>
  <path d="M13 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2M18 4l2.414 2.414A2 2 0 0 1 21 7.828V18.5a1.5 1.5 0 0 1-3 0v-1a2.5 2.5 0 0 0-2.5-2.5H15"/>
  <path d="M19.5 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"/>
    </svg>
  );
}
