import React from 'react';

/**
 * PiLinkChainHorizontalStroke icon from the stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLinkChainHorizontalStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'link-chain-horizontal icon',
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
      <path d="M13.9 13C13.9656 12.6769 14 12.3425 14 12C14 10.3642 13.2144 8.91184 12 7.99963C11.1643 7.37194 10.1256 7 9 7H7C4.23858 7 2 9.23858 2 12C2 14.7614 4.23858 17 7 17H8M10.1 11C10.0344 11.3231 10 11.6575 10 12C10 13.6358 10.7856 15.0882 12 16.0004C12.8357 16.6281 13.8744 17 15 17H17C19.7614 17 22 14.7614 22 12C22 9.23858 19.7614 7 17 7H16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
