import React from 'react';

/**
 * PiProductHuntContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiProductHuntContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'product-hunt icon',
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
      <path d="M10 13.625V8h2.813a2.813 2.813 0 0 1 0 5.625zm0 0V17m2 4.15a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
    </svg>
  );
}
