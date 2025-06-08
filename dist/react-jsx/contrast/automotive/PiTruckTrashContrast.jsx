import React from 'react';

/**
 * PiTruckTrashContrast icon from the contrast style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTruckTrashContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'truck-trash icon',
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
      <path d="M15 18.5a2 2 0 0 0 4 0m-4 0a2 2 0 1 1 4 0m-4 0H9m6 0q.002-5 0-10m4 10c.61-.002 1.344.07 1.908-.218a2 2 0 0 0 .874-.874C22 16.98 22 16.42 22 15.3v-1.8l-1.195-2.988c-.29-.727-.436-1.09-.679-1.357a2 2 0 0 0-.781-.529c-.338-.126-.73-.126-1.511-.126H15m-6 10a2 2 0 0 1-4 0m4 0a2 2 0 1 0-4 0m0 0c-.61-.002-1.344.07-1.908-.218a2 2 0 0 1-.874-.874C2 16.98 2 16.42 2 15.3V10l13-4v2.5"/>
  <path fill="currentColor" d="M2 10v5.3c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874c.564.288 1.298.216 1.908.218a2 2 0 1 1 4 0h6q.002-5 0-10V6z" opacity=".28"/>
    </svg>
  );
}
