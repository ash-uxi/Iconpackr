import React from 'react';

/**
 * PiClockOffSolid icon from the solid style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiClockOffSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'clock-off icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L18.4353 4.15044C16.6844 2.71356 14.4424 1.84998 12.0001 1.84998C6.39441 1.84998 1.8501 6.39429 1.8501 12C1.8501 14.4423 2.71369 16.6843 4.15057 18.4352L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711ZM13 9.58579V8C13 7.44772 12.5523 7 12 7C11.4477 7 11 7.44772 11 8V11.5858L13 9.58579Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M8.2981 19.9415L13.1998 15.0398L14.4631 15.8437C14.9291 16.1402 15.5472 16.0028 15.8437 15.5369C16.1402 15.0709 16.0028 14.4528 15.5369 14.1563L14.6486 13.591L19.9416 8.29798C20.1852 8.05437 20.5371 7.95331 20.8728 8.03052C21.2086 8.10774 21.481 8.35235 21.5937 8.67791C21.9545 9.72008 22.1501 10.8382 22.1501 12C22.1501 17.6057 17.6058 22.15 12.0001 22.15C10.8384 22.15 9.72021 21.9544 8.67803 21.5936C8.35247 21.4808 8.10786 21.2085 8.03065 20.8727C7.95343 20.537 8.05449 20.1851 8.2981 19.9415Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
