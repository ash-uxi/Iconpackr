import React from 'react';

/**
 * PiInformationSquareDuoStroke icon from the duo-stroke style in alerts category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiInformationSquareDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'information-square icon',
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
      <path d="M17.2961 3.45672C16.1935 3 14.7957 3 12 3C9.20435 3 7.80653 3 6.7039 3.45672C5.23373 4.06568 4.06569 5.23373 3.45672 6.7039C3 7.80652 3 9.20435 3 12C3 14.7956 3 16.1935 3.45672 17.2961C4.06568 18.7663 5.23373 19.9343 6.7039 20.5433C7.80652 21 9.20435 21 12 21C14.7956 21 16.1935 21 17.2961 20.5433C18.7663 19.9343 19.9343 18.7663 20.5433 17.2961C21 16.1935 21 14.7957 21 12C21 9.20435 21 7.80653 20.5433 6.7039C19.9343 5.23373 18.7663 4.06569 17.2961 3.45672Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.78149 9.71853C8.78149 8.21713 9.99862 7 11.5 7C13.0014 7 14.2186 8.21713 14.2186 9.71853C14.2186 10.6748 13.7248 11.5157 12.9784 12.0003C12.2544 12.4704 11.5 13.1368 11.5 14M11.5 17H11.501" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
