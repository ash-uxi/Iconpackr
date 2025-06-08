import React from 'react';

/**
 * PiResolutionQualityHqDuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiResolutionQualityHqDuoStroke({ 
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
      <path d="M17 4H7C4.79086 4 3 5.79086 3 8V16C3 18.2091 4.79086 20 7 20H17C19.2091 20 21 18.2091 21 16V8C21 5.79086 19.2091 4 17 4Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.75391 8.75024V12.2502M6.75391 12.2502H10.2539M6.75391 12.2502V15.2502M10.2539 12.2502V8.75024M10.2539 12.2502V15.2502M15.4217 14.3273V15.8584M13.7538 10.2983C13.7538 9.33184 14.5373 8.54834 15.5038 8.54834C16.4702 8.54834 17.2538 9.33184 17.2538 10.2983V12.5773C17.2538 13.5438 16.4702 14.3273 15.5038 14.3273C14.5373 14.3273 13.7538 13.5438 13.7538 12.5773V10.2983Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
