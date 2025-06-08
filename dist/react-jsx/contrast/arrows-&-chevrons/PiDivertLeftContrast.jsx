import React from 'react';

/**
 * PiDivertLeftContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivertLeftContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divert-left icon',
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
      <path d="m22 9-6.879 6.879a3 3 0 0 1-4.242 0l-4.947-4.947m0 0A24 24 0 0 1 7.9 9.169L9 8.29a20.8 20.8 0 0 0-5.347-.202.625.625 0 0 0-.566.566A20.8 20.8 0 0 0 3.29 14l.88-1.1a24 24 0 0 1 1.763-1.968"/>
  <path fill="currentColor" d="M3.653 8.087A20.8 20.8 0 0 1 9 8.29l-1.1.88A24 24 0 0 0 4.17 12.9L3.288 14a20.8 20.8 0 0 1-.202-5.347.625.625 0 0 1 .566-.566" opacity=".28"/>
    </svg>
  );
}
