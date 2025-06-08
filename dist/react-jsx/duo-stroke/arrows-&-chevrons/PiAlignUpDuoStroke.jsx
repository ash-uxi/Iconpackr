import React from 'react';

/**
 * PiAlignUpDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-up icon',
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
      <path d="M5 4H19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.91675 12.0309C8.9754 10.5767 10.2121 9.2706 11.5956 8.14485C11.7143 8.04828 11.8572 8 12.0001 8M16.0834 12.0309C15.0248 10.5767 13.788 9.2706 12.4045 8.14485C12.2859 8.04828 12.143 8 12.0001 8M12.0001 8V20" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
