import React from 'react';

/**
 * PiAlignUpStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-up icon',
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
      <path d="M16 12.0309C14.9414 10.5767 13.7046 9.2706 12.3211 8.14486C12.2025 8.04828 12.0596 8 11.9167 8M7.83333 12.0309C8.89198 10.5767 10.1287 9.2706 11.5122 8.14486C11.6309 8.04828 11.7738 8 11.9167 8M11.9167 8L11.9167 20M19 4H5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
