import React from 'react';

/**
 * PiAlignHorizontalCenterDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignHorizontalCenterDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-horizontal-center icon',
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
      <path d="M12 5V19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M17.316 9C16.1197 9.77778 15.0452 10.6864 14.1192 11.7028C14.0397 11.79 14 11.895 14 12M17.316 15C16.1197 14.2222 15.0452 13.3136 14.1192 12.2972C14.0397 12.21 14 12.105 14 12M14 12L21 12M6.68403 15C7.88031 14.2222 8.95475 13.3136 9.88084 12.2972C9.96028 12.21 10 12.105 10 12M6.68403 9C7.88031 9.77778 8.95475 10.6864 9.88084 11.7028C9.96028 11.79 10 11.895 10 12M10 12L3 12" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
