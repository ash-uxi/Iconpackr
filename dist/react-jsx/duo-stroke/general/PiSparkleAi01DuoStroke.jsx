import React from 'react';

/**
 * PiSparkleAi01DuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSparkleAi01DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'sparkle-ai-01 icon',
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
      <path d="M12.8998 3C13.5399 8.03653 15.5304 11.1418 20.9998 12C15.81 12.8143 13.5699 15.7277 12.8998 21C12.2297 15.7277 9.98965 12.8143 4.7998 12C9.98965 11.1857 12.2297 8.2723 12.8998 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 17.65V19M5 19V20.35M5 19H6.35M5 19H3.65M5.7 3C5.94808 4.50612 6.8515 5.44494 8.4 5.7C6.8515 5.95506 5.94808 6.89388 5.7 8.4C5.45192 6.89388 4.5485 5.95506 3 5.7C4.50612 5.45192 5.44494 4.5485 5.7 3Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
