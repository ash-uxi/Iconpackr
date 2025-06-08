import React from 'react';

/**
 * PiPlaySmallStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlaySmallStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'play-small icon',
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
      <path d="M7 11.808C7 9.16539 7 7.84406 7.55226 7.10639C8.03352 6.46355 8.77021 6.06136 9.5712 6.00415C10.4903 5.9385 11.6018 6.65302 13.8248 8.08206L14.1234 8.27401C16.0523 9.51406 17.0168 10.1341 17.3499 10.9225C17.641 11.6113 17.641 12.3887 17.3499 13.0775C17.0168 13.8659 16.0523 14.4859 14.1234 15.726L13.8248 15.9179C11.6018 17.347 10.4903 18.0615 9.5712 17.9959C8.77021 17.9386 8.03352 17.5364 7.55226 16.8936C7 16.1559 7 14.8346 7 12.192V11.808Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
