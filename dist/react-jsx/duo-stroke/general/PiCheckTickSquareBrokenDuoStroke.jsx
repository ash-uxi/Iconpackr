import React from 'react';

/**
 * PiCheckTickSquareBrokenDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCheckTickSquareBrokenDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'check-tick-square-broken icon',
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
      <path d="M20.9951 10.3399C21 10.833 21 11.3824 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.5517 3 15.9389 3 17 3.3473" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21.0345 5.40332L20.2421 5.94449C17.0368 8.13349 14.3703 11.0217 12.4435 14.3913L12.0841 15.0198L8.60938 11" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
