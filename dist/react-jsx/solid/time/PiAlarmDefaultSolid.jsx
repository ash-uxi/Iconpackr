import React from 'react';

/**
 * PiAlarmDefaultSolid icon from the solid style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlarmDefaultSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'alarm-default icon',
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
      <path d="M18.2929 2.29289C18.6834 1.90237 19.3166 1.90237 19.7071 2.29289L22.7071 5.29289C23.0976 5.68342 23.0976 6.31658 22.7071 6.70711C22.3166 7.09763 21.6834 7.09763 21.2929 6.70711L18.2929 3.70711C17.9024 3.31658 17.9024 2.68342 18.2929 2.29289Z" fill="currentColor" stroke="none"/>
  <path d="M3 13C3 8.02944 7.02944 4 12 4C16.9706 4 21 8.02944 21 13C21 17.9706 16.9706 22 12 22C7.02944 22 3 17.9706 3 13ZM13 9.89844C13 9.34615 12.5523 8.89844 12 8.89844C11.4477 8.89844 11 9.34615 11 9.89844V13.7169C11 14.2436 11.2762 14.7316 11.7276 15.0028L14.043 16.3959C14.5163 16.6807 15.1307 16.5278 15.4154 16.0546C15.7002 15.5814 15.5474 14.9669 15.0742 14.6822L13 13.4342V9.89844Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
  <path d="M5.70711 2.29289C6.09763 2.68342 6.09763 3.31658 5.70711 3.70711L2.70711 6.70711C2.31658 7.09763 1.68342 7.09763 1.29289 6.70711C0.902369 6.31658 0.902369 5.68342 1.29289 5.29289L4.29289 2.29289C4.68342 1.90237 5.31658 1.90237 5.70711 2.29289Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
