import React from 'react';

/**
 * PiKeyRight02Contrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyRight02Contrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-right-02 icon',
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
      <path fill="currentColor" d="m19.999 10 2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L13.999 14h-3.468a4.5 4.5 0 1 1 0-4z" opacity=".28"/>
  <path d="m20 10 2 2-2 2h-3l-1.146-1.146a.5.5 0 0 0-.708 0L14 14h-3.468a4.5 4.5 0 1 1 0-4z"/>
  <path d="M5.5 13v-2a1.25 1.25 0 0 0 0 2"/>
    </svg>
  );
}
