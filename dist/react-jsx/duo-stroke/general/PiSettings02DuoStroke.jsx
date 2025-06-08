import React from 'react';

/**
 * PiSettings02DuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSettings02DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'settings-02 icon',
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
      <path d="M10.9912 12C10.9912 11.4477 11.4481 11 12.0004 11C12.5527 11 13.0096 11.4477 13.0096 12C13.0096 12.5523 12.5527 13 12.0004 13C11.4481 13 10.9912 12.5523 10.9912 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M13.6531 4.50528L13.6018 4.27916C13.2149 2.57361 10.7851 2.57361 10.3982 4.27916L10.3469 4.50528C10.0962 5.61045 8.82809 6.13573 7.86935 5.53151L7.6732 5.40789C6.19363 4.47545 4.47544 6.19363 5.40789 7.6732L5.53151 7.86935C6.13573 8.82809 5.61045 10.0962 4.50528 10.3469L4.27916 10.3982C2.57361 10.7851 2.57361 13.2149 4.27916 13.6018L4.50528 13.6531C5.61045 13.9038 6.13573 15.1719 5.53151 16.1306L5.40789 16.3268C4.47545 17.8064 6.19363 19.5246 7.6732 18.5921L7.86935 18.4685C8.82809 17.8643 10.0962 18.3895 10.3469 19.4947L10.3982 19.7208C10.7851 21.4264 13.2149 21.4264 13.6018 19.7208L13.6531 19.4947C13.9038 18.3895 15.1719 17.8643 16.1306 18.4685L16.3268 18.5921C17.8064 19.5246 19.5246 17.8064 18.5921 16.3268L18.4685 16.1306C17.8643 15.1719 18.3895 13.9038 19.4947 13.6531L19.7208 13.6018C21.4264 13.2149 21.4264 10.7851 19.7208 10.3982L19.4947 10.3469C18.3895 10.0962 17.8643 8.82809 18.4685 7.86935L18.5921 7.6732C19.5246 6.19363 17.8064 4.47545 16.3268 5.40789L16.1306 5.53151C15.1719 6.13573 13.9038 5.61045 13.6531 4.50528Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
