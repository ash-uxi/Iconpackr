import React from 'react';

/**
 * PiSwipeDefaultStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSwipeDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'swipe-default icon',
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
      <path d="M15 4.37129C17.1942 4.84522 19.226 5.75556 21 7.00692M2 7.00692C2.93328 6.34859 3.93791 5.78465 5 5.32898M6.73109 19.2679L2.48801 12.7401C2.23087 12.3445 2.37528 11.8132 2.7973 11.6022C4.09516 10.9532 5.66811 11.2709 6.61244 12.3726L8.00564 13.998V3.99805C8.00564 2.89348 8.90107 1.99805 10.0056 1.99805C11.1102 1.99805 12.0056 2.89348 12.0056 3.99805V9.99805L16.8139 10.7994C20.3394 11.3872 20.4878 15.3789 19.4656 18.1047C17.6653 22.9058 9.48722 23.5082 6.73109 19.2679Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
