import React from 'react';

/**
 * PiWashingMachineContrast icon from the contrast style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiWashingMachineContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'washing-machine icon',
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
      <path fill="currentColor" d="M16.8 2H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 3.52 4 4.08 4 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 22 6.08 22 7.2 22h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 20.48 20 19.92 20 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 2 17.92 2 16.8 2" opacity=".28"/>
  <path d="M4 8h16M7 5h2m5 0h.01M17 5h.01M7.2 22h9.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C20 20.48 20 19.92 20 18.8V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C18.48 2 17.92 2 16.8 2H7.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C4 3.52 4 4.08 4 5.2v13.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C5.52 22 6.08 22 7.2 22m8.8-7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}
