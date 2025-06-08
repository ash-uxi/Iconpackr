import React from 'react';

/**
 * PiChocolateBarContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChocolateBarContrast({ 
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
      <path fill="currentColor" d="M11.211 2a5 5 0 0 0 4.818 3.422A3 3 0 0 0 19 8v11.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 5 19.5v-15A2.5 2.5 0 0 1 7.5 2z" opacity=".28"/>
  <path d="M19 15V8a3 3 0 0 1-2.97-2.578h-.073A5 5 0 0 1 11.211 2H7.5A2.5 2.5 0 0 0 5 4.5V15m14 0v4.5a2.5 2.5 0 0 1-2.5 2.5H12m7-7H5m7 7H7.5A2.5 2.5 0 0 1 5 19.5V15m7 7V3.48M5 9h14"/>
    </svg>
  );
}
