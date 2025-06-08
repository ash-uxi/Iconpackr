import React from 'react';

/**
 * PiChocolateBarDuoStroke icon from the duo-stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChocolateBarDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chocolate-bar icon',
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
      <path d="M11.211 2a5 5 0 0 0 4.818 3.422A3 3 0 0 0 19 8v11.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-15A2.5 2.5 0 0 1 7.5 2z" opacity=".28" fill="none"/>
  <path  d="M4 8h7V1h.211a1 1 0 0 1 .95.685c.178.537.466 1.023.839 1.431V8h7v2h-7v4h7v2h-7v7h-2v-7H4v-2h7v-4H4z" fill="none"/>
    </svg>
  );
}
