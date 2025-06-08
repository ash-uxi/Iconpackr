import React from 'react';

/**
 * PiArrowRightDownDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightDownDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-down icon',
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
      <path d="M18.1369 18.1366L5.40894 5.40869" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M18.2568 9.77173C18.6441 12.359 18.695 14.9798 18.4089 17.5687C18.3844 17.7908 18.2853 17.9886 18.1368 18.1371C17.9884 18.2856 17.7905 18.3846 17.5684 18.4092C14.9796 18.6953 12.3588 18.6444 9.77148 18.257" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
