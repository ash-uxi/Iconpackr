import React from 'react';

/**
 * PiListNumberDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListNumberDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-number icon',
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
      <path d="M21 6H11M21 12H11M21 18H11" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5 9.99978V4.75488C4.3236 4.92051 3.80674 5.38628 3.5 5.99976M7 18.9998H3.60797V18.4998C4.49018 17.8818 5.39421 17.2985 6.11723 16.4886C6.60019 15.9476 6.65362 15.138 6.13314 14.5942C5.71038 14.1526 4.9793 14.0078 4.41574 14.227C4.03522 14.375 3.81857 14.6715 3.60797 14.9998" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
