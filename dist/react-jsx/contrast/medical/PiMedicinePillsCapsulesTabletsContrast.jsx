import React from 'react';

/**
 * PiMedicinePillsCapsulesTabletsContrast icon from the contrast style in medical category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMedicinePillsCapsulesTabletsContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'medicine-pills-capsules-tablets icon',
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
    <path d="M14.001 18.014A3.999 3.999 0 1 1 22 17.986a3.999 3.999 0 0 1-7.998.028M3.238 15.762a4.23 4.23 0 0 1 0-5.98l6.545-6.544a4.228 4.228 0 0 1 5.979 5.98l-6.545 6.544a4.23 4.23 0 0 1-5.979 0"/>
  </g>
  <path d="M14.001 18.014 22 17.986m-7.998.028A3.999 3.999 0 0 0 22 17.986m-7.998.028A3.999 3.999 0 1 1 22 17.986M6.51 6.51 3.238 9.783a4.228 4.228 0 0 0 5.98 5.979l3.272-3.272M6.51 6.51l3.273-3.272a4.228 4.228 0 0 1 5.979 5.98L12.49 12.49M6.51 6.51l5.98 5.98m-1.856-5.832 1.423-1.423c.372-.371.925-.45 1.374-.236"/>
    </svg>
  );
}
