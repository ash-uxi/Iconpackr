import React from 'react';

/**
 * PiAlarmOffDuoSolid icon from the duo-solid style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlarmOffDuoSolid({ 
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
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <g fill={color || "currentColor"} opacity=".28"> <path d="M5.707 2.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0M18.293 2.293a1 1 0 0 1 1.414 0l1 1a1 1 0 0 1-1.414 1.414l-1-1a1 1 0 0 1 0-1.414M3 13a9 9 0 0 1 14.777-6.901 1 1 0 0 1 .065 1.473L13 12.414V9.898a1 1 0 1 0-2 0v3.819c0 .202.04.4.117.58l-4.545 4.545a1 1 0 0 1-1.473-.065A8.97 8.97 0 0 1 3 13M12.669 15.57l-4.208 4.207a1 1 0 0 0 .353 1.642A9 9 0 0 0 20.42 9.814a1 1 0 0 0-1.643-.352l-4.65 4.65.947.571a1 1 0 1 1-1.031 1.714z" /> </g> <path d="M22 2 2 22" />
    </svg>
  );
}
