import React from 'react';

/**
 * PiIdCardVerticalContrast icon from the contrast style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiIdCardVerticalContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'id-card-vertical icon',
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
      <path d="M17 3H7a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V6a3 3 0 0 0-3-3"/>
  <path fill="currentColor" d="M4 7.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C6.28 3 7.12 3 8.8 3h6.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C20 5.28 20 6.12 20 7.8v8.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C17.72 21 16.88 21 15.2 21H8.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C4 18.72 4 17.88 4 16.2z" opacity=".28"/>
  <path d="M7 6h6m-6 4h3m5.667 6h-3.334c-.736 0-1.333.597-1.333 1.333 0 .369.299.667.667.667h4.666a.667.667 0 0 0 .667-.667c0-.736-.597-1.333-1.333-1.333M15 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
    </svg>
  );
}
