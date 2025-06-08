import React from 'react';

/**
 * PiBurgerStroke icon from the stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBurgerStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'burger icon',
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
      <path d="M20.3334 13.5C19.3859 14.1667 17.9476 14.1667 17.0001 13.5C16.0526 12.8333 14.6142 12.8333 13.6667 13.5C12.7193 14.1667 11.2809 14.1667 10.3334 13.5C9.38592 12.8333 7.94758 12.8333 7.00008 13.5C6.05258 14.1667 4.61424 14.1667 3.66675 13.5M4.36095 10H19.6391C20.3907 10 21 9.44327 21 8.7565C21 2.4145 3 2.4145 3 8.75651C3 9.44327 3.60932 10 4.36095 10ZM3.6 17H20.4C20.7314 17 21 17.2686 21 17.6C21 18.9255 19.9255 20 18.6 20H5.4C4.07452 20 3 18.9255 3 17.6C3 17.2686 3.26863 17 3.6 17Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
