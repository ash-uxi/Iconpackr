import React from 'react';

/**
 * PiDivideDefaultDuoStroke icon from the duo-stroke style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivideDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divide-default icon',
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
      <g opacity="0.28"  fill="none"><path d="M13.0015 17.0015C13.0015 17.5546 12.5531 18.0029 12 18.0029C11.4469 18.0029 10.9985 17.5546 10.9985 17.0015C10.9985 16.4484 11.4469 16 12 16C12.5531 16 13.0015 16.4484 13.0015 17.0015Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/><path d="M13.0015 6.99854C13.0015 7.55163 12.5531 8 12 8C11.4469 8 10.9985 7.55163 10.9985 6.99854C10.9985 6.44544 11.4469 5.99707 12 5.99707C12.5531 5.99707 13.0015 6.44544 13.0015 6.99854Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/></g>
  <path d="M5 12H19" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
