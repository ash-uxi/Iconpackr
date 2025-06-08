import React from 'react';

/**
 * PiAlarmOffStroke icon from the stroke style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlarmOffStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'alarm-off icon',
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
      <path d="M5 3L2 6M14.2827 15.3696L14.5 15.5M19.4843 10.168C19.8176 11.0484 20 12.0029 20 13C20 17.4183 16.4183 21 12 21C11.0029 21 10.0484 20.8176 9.16805 20.4843M5.86515 18.1348C4.70094 16.7454 4 14.9545 4 13C4 8.58172 7.58172 5 12 5C13.9545 5 15.7454 5.70094 17.1348 6.86515M5.86515 18.1348L2 22M5.86515 18.1348L12 12M12 12V10M12 12L17.1348 6.86515M17.1348 6.86515L20 4M22 2L20 4M20 4L19 3" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
