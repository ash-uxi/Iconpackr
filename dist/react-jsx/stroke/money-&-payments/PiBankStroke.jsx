import React from 'react';

/**
 * PiBankStroke icon from the stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBankStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bank icon',
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
      <path d="M2 21H22M4 13L4 18M9 13L9 18M15 13L15 18M20 13V18M22 10H2V9L10.08 2.94C10.7685 2.42361 11.1128 2.16542 11.4909 2.06589C11.8246 1.97804 12.1754 1.97804 12.5091 2.06589C12.8872 2.16542 13.2315 2.42361 13.92 2.94L22 9V10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
