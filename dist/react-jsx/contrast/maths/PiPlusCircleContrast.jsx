import React from 'react';

/**
 * PiPlusCircleContrast icon from the contrast style in maths category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlusCircleContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'plus-circle icon',
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
      <path d="M12 15v-3m0 0V9m0 3H9m3 0h3m6.15 0a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
    </svg>
  );
}
