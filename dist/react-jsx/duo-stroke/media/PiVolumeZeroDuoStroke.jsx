import React from 'react';

/**
 * PiVolumeZeroDuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiVolumeZeroDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'volume-zero icon',
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
      <path d="M13.6738 20.6439C15.0661 21.6384 17 20.6431 17 18.9322V5.10721C17 3.39628 15.0661 2.40106 13.6738 3.39552" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 18.9322V5.10721C17 3.39628 15.0661 2.40106 13.6739 3.39552L10.8609 5.40477C10.2934 5.81012 9.6464 6.09043 8.96255 6.2272C6.6585 6.68801 5 8.71106 5 11.0607V12.9787C5 15.3284 6.6585 17.3514 8.96255 17.8122C9.6464 17.949 10.2934 18.2293 10.8609 18.6347L13.6739 20.6439C15.0661 21.6384 17 20.6431 17 18.9322Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
