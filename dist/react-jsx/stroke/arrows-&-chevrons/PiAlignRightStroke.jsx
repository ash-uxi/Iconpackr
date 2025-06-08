import React from 'react';

/**
 * PiAlignRightStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignRightStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-right icon',
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
      <path d="M11.9691 16C13.4233 14.9414 14.7294 13.7046 15.8551 12.3211C15.9517 12.2025 16 12.0596 16 11.9167M11.9691 7.83333C13.4233 8.89198 14.7294 10.1287 15.8551 11.5122C15.9517 11.6309 16 11.7738 16 11.9167M16 11.9167L4 11.9167M20 19V5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
