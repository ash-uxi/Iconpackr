import React from 'react';

/**
 * PiArrowBigTurnLeftContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowBigTurnLeftContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-big-turn-left icon',
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
      <path d="M3.241 11.307A35.3 35.3 0 0 1 9.8 5a61 61 0 0 0-.33 4c7.534 0 11.534 3 11.534 10-3-4-7-4-11.535-4q.1 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386"/>
  <path fill="currentColor" d="M3.241 11.307A35.3 35.3 0 0 1 9.798 5a61 61 0 0 0-.33 4c7.535 0 11.535 3 11.535 10-3-4-7-4-11.535-4q.099 2.005.33 4a35.3 35.3 0 0 1-6.557-6.307 1.11 1.11 0 0 1 0-1.386" opacity=".28"/>
    </svg>
  );
}
