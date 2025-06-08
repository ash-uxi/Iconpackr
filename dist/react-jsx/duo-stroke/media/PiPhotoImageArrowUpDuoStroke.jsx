import React from 'react';

/**
 * PiPhotoImageArrowUpDuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhotoImageArrowUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'photo-image-arrow-up icon',
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
      <path d="M13.379 21H10c-2.8 0-4.2 0-5.27-.545a5 5 0 0 1-2.185-2.185C2 17.2 2 15.8 2 13v-2c0-2.8 0-4.2.545-5.27A5 5 0 0 1 4.73 3.545C5.8 3 7.2 3 10 3h4c2.8 0 4.2 0 5.27.545a5 5 0 0 1 2.185 2.185C22 6.8 22 8.2 22 11v2.105" opacity=".28" fill="none"/>
  <path  fillRule="evenodd" d="M17.99 15.357a1.6 1.6 0 0 1 2.02 0c.884.716 1.677 1.54 2.361 2.451a1 1 0 1 1-1.6 1.2 12 12 0 0 0-.771-.926v3.916a1 1 0 1 1-2 0v-3.916q-.41.443-.771.926a1 1 0 0 1-1.6-1.2 13.9 13.9 0 0 1 2.361-2.451M5.5 8.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0" clipRule="evenodd" fill="none"/>
  <path  d="M7.096 19.956q.412.024.94.034.489.008 1.072.01a10.5 10.5 0 0 1 9.318-8.945C18.95 11.001 19.582 11 21 11l-.001-.996A59 59 0 0 0 20.988 9h-.066c-1.32 0-2.062 0-2.7.066a12.5 12.5 0 0 0-11.126 10.89" fill="none"/>
    </svg>
  );
}
