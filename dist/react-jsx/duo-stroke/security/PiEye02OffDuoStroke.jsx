import React from 'react';

/**
 * PiEye02OffDuoStroke icon from the duo-stroke style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEye02OffDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eye-02-off icon',
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
      <path d="M22 2L2 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 14C3 11.8125 5.7 7 12 7C13.6234 7 15.0078 7.31957 16.1686 7.83144M19.3912 10.265C20.4885 11.5984 21 13.0479 21 14M12.8715 11.1285C12.5957 11.0449 12.3031 11 12 11C10.3431 11 9 12.3431 9 14C9 14.3031 9.04494 14.5957 9.12853 14.8715M12.751 16.9052C13.8044 16.6337 14.6337 15.8044 14.9052 14.751" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
