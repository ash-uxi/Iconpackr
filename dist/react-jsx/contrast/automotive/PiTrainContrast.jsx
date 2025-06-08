import React from 'react';

/**
 * PiTrainContrast icon from the contrast style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTrainContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'train icon',
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
      <path d="M12 3v10M16 16h1M16 19l2 3M4 13h16M4 9.4c0-2.24 0-3.36.436-4.216a4 4 0 0 1 1.748-1.748C7.04 3 8.16 3 10.4 3h3.2c2.24 0 3.36 0 4.216.436a4 4 0 0 1 1.748 1.748C20 6.04 20 7.16 20 9.4v6.4c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874C18.48 19 17.92 19 16.8 19H7.2c-1.12 0-1.68 0-2.108-.218a2 2 0 0 1-.874-.874C4 17.48 4 16.92 4 15.8zM7 16h1"/>
  <path fill="currentColor" d="M7.2 19h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 17.48 20 16.92 20 15.8V13H4v2.8c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 19 6.08 19 7.2 19" opacity=".28"/>
  <path d="m8 19-2 3"/>
    </svg>
  );
}
