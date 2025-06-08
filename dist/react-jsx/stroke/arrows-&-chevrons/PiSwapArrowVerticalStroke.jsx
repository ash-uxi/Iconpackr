import React from 'react';

/**
 * PiSwapArrowVerticalStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSwapArrowVerticalStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'swap-arrow-vertical icon',
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
      <path d="M12 17.1131C13.037 18.5153 14.2485 19.7748 15.6038 20.8603C15.72 20.9534 15.86 21 16 21M20 17.1131C18.963 18.5153 17.7515 19.7748 16.3962 20.8603C16.28 20.9534 16.14 21 16 21M16 21V7M4 6.88693C5.03704 5.48467 6.24852 4.22522 7.60379 3.13968C7.72005 3.04656 7.86002 3 8 3M12 6.88693C10.963 5.48467 9.75148 4.22522 8.39621 3.13968C8.27995 3.04656 8.13998 3 8 3M8 3V17" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
