import React from 'react';

/**
 * PiChevronBigRightStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronBigRightStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-big-right icon',
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
      <path d="M9 18C11.1808 16.423 13.1364 14.5771 14.8172 12.5101C15.0609 12.2103 15.0609 11.7897 14.8172 11.4899C13.1364 9.42294 11.1808 7.57701 9 6" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
