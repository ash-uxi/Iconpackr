import React from 'react';

/**
 * PiDivertRightStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivertRightStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divert-right icon',
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
      <path d="M15 8.28858C16.7786 7.99076 18.5759 7.92321 20.3472 8.08707C20.4991 8.10113 20.6335 8.16659 20.7335 8.26652M20.7335 8.26652C20.8334 8.36646 20.8989 8.50086 20.9129 8.65281C21.0768 10.4241 21.0092 12.2214 20.7114 14M20.7335 8.26652L13.1213 15.8787C11.9497 17.0503 10.0503 17.0503 8.8787 15.8787L2 9" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
