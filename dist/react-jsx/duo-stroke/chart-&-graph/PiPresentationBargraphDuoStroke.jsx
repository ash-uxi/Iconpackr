import React from 'react';

/**
 * PiPresentationBargraphDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPresentationBargraphDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'presentation-bargraph icon',
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
      <path d="M12 3H8.4C6.15979 3 5.03968 3 4.18404 3.43597C3.43139 3.81947 2.81947 4.43139 2.43597 5.18404C2 6.03968 2 7.15979 2 9.4V11.6C2 13.8402 2 14.9603 2.43597 15.816C2.81947 16.5686 3.43139 17.1805 4.18404 17.564C5.03968 18 6.15979 18 8.4 18H15.6C17.8402 18 18.9603 18 19.816 17.564C20.5686 17.1805 21.1805 16.5686 21.564 15.816C22 14.9603 22 13.8402 22 11.6V9.4C22 7.15979 22 6.03968 21.564 5.18404C21.1805 4.43139 20.5686 3.81947 19.816 3.43597C18.9603 3 17.8402 3 15.6 3H12ZM12 3V2M6 22L8 18M18 22L16 18" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7 14V12M12 14V7M17 14V10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
