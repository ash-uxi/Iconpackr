import React from 'react';

/**
 * PiHeadingH2Stroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeadingH2Stroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'heading-h2 icon',
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
      <path d="M4 12H12M4 18V6M12 18V6M21.5679 18H16V17.1793C17.4481 16.1649 18.932 15.2073 20.1189 13.8779C20.9116 12.9899 20.9993 11.6609 20.145 10.7684C19.451 10.0435 18.251 9.80588 17.3259 10.1656C16.7013 10.4086 16.3457 10.8952 16 11.4341" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
