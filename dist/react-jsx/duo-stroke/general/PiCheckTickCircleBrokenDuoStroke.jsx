import React from 'react';

/**
 * PiCheckTickCircleBrokenDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCheckTickCircleBrokenDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'check-tick-circle-broken icon',
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
      <path d="M21.0002 10.3363C21.6143 13.6712 20.3426 17.2187 17.4293 19.3658C13.3614 22.364 7.63321 21.4968 4.63507 17.4288C1.63692 13.3609 2.50414 7.63272 6.57207 4.63458C9.48533 2.48744 13.2501 2.32277 16.2538 3.89642" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M21.0345 5.40332L20.2421 5.94449C17.0368 8.13349 14.3703 11.0217 12.4435 14.3913L12.0841 15.0198L8.60938 11" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
