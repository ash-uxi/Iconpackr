import React from 'react';

/**
 * PiTShirtDefaultDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTShirtDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 't-shirt-default icon',
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
      <path d="M1.5 6L8 3L9.09 3.272C11.0006 3.74958 12.9994 3.74958 14.91 3.272L16 3L22.5 6L21 11L18 10V20C18 20.2652 17.8946 20.5196 17.7071 20.7071C17.5196 20.8946 17.2652 21 17 21H7C6.73478 21 6.48043 20.8946 6.29289 20.7071C6.10536 20.5196 6 20.2652 6 20V10L3 11L1.5 6Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 10L3 11L1.5 6L8 3L9.09 3.272C11.0006 3.74958 12.9994 3.74958 14.91 3.272L16 3L22.5 6L21 11L18 10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
