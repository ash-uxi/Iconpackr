import React from 'react';

/**
 * PiFilterFunnelContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFilterFunnelContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'filter-funnel icon',
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
      <path fill="currentColor" d="M20 4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 1 .293.707V18l4 3v-7.586a1 1 0 0 1 .293-.707l5.414-5.414A1 1 0 0 0 20 6.586z" opacity=".28"/>
  <path d="M20 4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414a1 1 0 0 1 .293.707V18l4 3v-7.586a1 1 0 0 1 .293-.707l5.414-5.414A1 1 0 0 0 20 6.586z"/>
    </svg>
  );
}
