import React from 'react';

/**
 * PiFitnessRunDuoStroke icon from the duo-stroke style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFitnessRunDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'fitness-run icon',
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
      <path d="M14 20L16.0783 17.229C16.5121 16.6506 16.2076 15.8171 15.5031 15.6546L12.7435 15.0177C11.5588 14.7443 10.8901 13.4858 11.3265 12.351L13 8H10.4721C8.95705 8 7.572 8.85601 6.89443 10.2111L6 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M14 4C14 3.44772 14.4477 3 15 3C15.5523 3 16 3.44772 16 4C16 4.55228 15.5523 5 15 5C14.4477 5 14 4.55228 14 4Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16 9.5L16.0206 9.53096C16.5801 10.3702 17.677 10.6615 18.5792 10.2104L19 10" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.5 17L8.59382 18.8124C8.20468 19.5906 7.61918 20.2539 6.89519 20.7365L5 22" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
