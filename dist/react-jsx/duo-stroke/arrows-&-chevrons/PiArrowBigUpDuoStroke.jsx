import React from 'react';

/**
 * PiArrowBigUpDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowBigUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-big-up icon',
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
      <path d="M19 9.80502C17.6698 9.65076 16.3357 9.54063 15 9.47461V19.3979C15 19.958 15 20.238 14.891 20.4519C14.7951 20.6401 14.6421 20.793 14.454 20.8889C14.2401 20.9979 13.9601 20.9979 13.4 20.9979H10.6C10.0399 20.9979 9.75992 20.9979 9.54601 20.8889C9.35784 20.793 9.20486 20.6401 9.10899 20.4519C9 20.238 9 19.958 9 19.3979V9.47461C7.6643 9.54063 6.33024 9.65076 5 9.80502" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M19 9.80506C17.1852 7.3511 15.0651 5.14707 12.6934 3.24737C12.4899 3.08441 12.245 3.00293 12 3.00293C11.755 3.00293 11.5101 3.08441 11.3066 3.24737C8.93491 5.14707 6.81482 7.3511 5 9.80506" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
