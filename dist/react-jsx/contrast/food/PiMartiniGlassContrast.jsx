import React from 'react';

/**
 * PiMartiniGlassContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMartiniGlassContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'martini-glass icon',
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
      <path d="M12 13v8m0-8L6 7m6 6 6-6m-6 14h5.5M12 21H7M6 7 3 4h18l-3 3M6 7c3.993.333 8.007.333 12 0"/>
  <path fill="currentColor" d="m6 7 6 6 6-6A72 72 0 0 1 6 7" opacity=".28"/>
    </svg>
  );
}
