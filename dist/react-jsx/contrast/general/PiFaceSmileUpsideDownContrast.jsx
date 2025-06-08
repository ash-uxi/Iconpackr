import React from 'react';

/**
 * PiFaceSmileUpsideDownContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceSmileUpsideDownContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-smile-upside-down icon',
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
      <path d="M15 14.496v-1m-6 1v-1m6.57-3.5a4.99 4.99 0 0 0-3.57-1.5 4.99 4.99 0 0 0-3.57 1.5M12 21.346a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  <path fill="currentColor" d="M2.85 12.196a9.15 9.15 0 1 1 18.3 0 9.15 9.15 0 0 1-18.3 0" opacity=".28"/>
    </svg>
  );
}
