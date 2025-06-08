import React from 'react';

/**
 * PiResolutionQualityHqStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiResolutionQualityHqStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'resolution-quality-hq icon',
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
      <path d="M6.75427 8.75V12.25M6.75427 12.25H10.2543M6.75427 12.25V15.25M10.2543 12.25V8.75M10.2543 12.25V15.25M15.4221 14.3271V15.8582M7 4H17C19.2091 4 21 5.79086 21 8V16C21 18.2091 19.2091 20 17 20H7C4.79086 20 3 18.2091 3 16V8C3 5.79086 4.79086 4 7 4ZM13.7542 10.2981C13.7542 9.3316 14.5377 8.5481 15.5042 8.5481C16.4706 8.5481 17.2542 9.3316 17.2542 10.2981V12.5771C17.2542 13.5436 16.4706 14.3271 15.5042 14.3271C14.5377 14.3271 13.7542 13.5436 13.7542 12.5771V10.2981Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
