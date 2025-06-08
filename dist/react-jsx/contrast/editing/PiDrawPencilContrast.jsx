import React from 'react';

/**
 * PiDrawPencilContrast icon from the contrast style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDrawPencilContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'draw-pencil icon',
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
      <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 1 18.3-.004A9.15 9.15 0 0 1 2.85 12" opacity=".28"/>
  <path d="M9.012 13 8 14.693v5.538M9.012 13 12 8l2.988 5m-5.976 0h5.976m0 0L16 14.693v5.538m0 0a9.15 9.15 0 1 0-8 0m8 0a9.1 9.1 0 0 1-4 .919 9.1 9.1 0 0 1-4-.919"/>
    </svg>
  );
}
