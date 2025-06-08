import React from 'react';

/**
 * PiBuildingApartmentOneContrast icon from the contrast style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBuildingApartmentOneContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'building-apartment-one icon',
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
      <path d="M10 6h3m-3 4h3m-3 4h3m-3 4h3M9.2 2h4.6c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874C17 3.52 17 4.08 17 5.2v15.2c0 .56 0 .84-.109 1.054a1 1 0 0 1-.437.437C16.24 22 15.96 22 15.4 22H7.6c-.56 0-.84 0-1.054-.109a1 1 0 0 1-.437-.437C6 21.24 6 20.96 6 20.4V5.2c0-1.12 0-1.68.218-2.108a2 2 0 0 1 .874-.874C7.52 2 8.08 2 9.2 2"/>
  <path fill="currentColor" d="M13.8 2H9.2c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C6 3.52 6 4.08 6 5.2v15.2c0 .56 0 .84.109 1.054a1 1 0 0 0 .437.437C6.76 22 7.04 22 7.6 22h7.8c.56 0 .84 0 1.054-.109a1 1 0 0 0 .437-.437C17 21.24 17 20.96 17 20.4V5.2c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C15.48 2 14.92 2 13.8 2" opacity=".28"/>
    </svg>
  );
}
