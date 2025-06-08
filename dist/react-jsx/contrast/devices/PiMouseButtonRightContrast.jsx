import React from 'react';

/**
 * PiMouseButtonRightContrast icon from the contrast style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMouseButtonRightContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'mouse-button-right icon',
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
      <path d="M12 3a7 7 0 0 0-7 7v4a7 7 0 1 0 14 0v-4a7 7 0 0 0-7-7m0 0v4.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 11 14.08 11 15.2 11H19"/>
  <path fill="currentColor" d="M19 10a7 7 0 1 0-14 0v4a7 7 0 1 0 14 0z" opacity=".28"/>
    </svg>
  );
}
