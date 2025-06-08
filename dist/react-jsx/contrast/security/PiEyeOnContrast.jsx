import React from 'react';

/**
 * PiEyeOnContrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEyeOnContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eye-on icon',
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
      <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
  <path fill="currentColor" d="M21 12c0 2-3.5 7-9 7s-9-5-9-7 3.5-7 9-7 9 5 9 7" opacity=".28"/>
  <path d="M21 12c0 2-3.5 7-9 7s-9-5-9-7 3.5-7 9-7 9 5 9 7"/>
    </svg>
  );
}
