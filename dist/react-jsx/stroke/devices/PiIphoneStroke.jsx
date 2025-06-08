import React from 'react';

/**
 * PiIphoneStroke icon from the stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiIphoneStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'iphone icon',
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
      <path d="M10 19H14M13 2.00004C12.8708 1.99994 12.7375 2.00004 12.6 2.00004H11.4C11.2625 2.00004 11.1292 1.99994 11 2.00004M13 2.00004C14.9767 2.00159 16.0128 2.0268 16.816 2.43602C17.5686 2.81951 18.1805 3.43143 18.564 4.18408C19 5.03973 19 6.15983 19 8.40004V15.6C19 17.8403 19 18.9604 18.564 19.816C18.1805 20.5687 17.5686 21.1806 16.816 21.5641C15.9603 22 14.8402 22 12.6 22H11.4C9.15979 22 8.03968 22 7.18404 21.5641C6.43139 21.1806 5.81947 20.5687 5.43597 19.816C5 18.9604 5 17.8403 5 15.6V8.40004C5 6.15983 5 5.03973 5.43597 4.18408C5.81947 3.43143 6.43139 2.81951 7.18404 2.43602C7.98717 2.0268 9.0233 2.00159 11 2.00004M13 2.00004V3.00004H11V2.00004" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
