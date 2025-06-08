import React from 'react';

/**
 * PiAlignVerticalCenterStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignVerticalCenterStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-vertical-center icon',
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
      <path d="M9 6.68403C9.77778 7.88031 10.6864 8.95475 11.7028 9.88084C11.79 9.96028 11.895 10 12 10M15 6.68402C14.2222 7.88031 13.3136 8.95475 12.2972 9.88084C12.21 9.96028 12.105 10 12 10M12 10V3M15 17.316C14.2222 16.1197 13.3136 15.0452 12.2972 14.1192C12.21 14.0397 12.105 14 12 14M9 17.316C9.77778 16.1197 10.6864 15.0452 11.7028 14.1192C11.79 14.0397 11.895 14 12 14M12 14L12 21M5 12H19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
