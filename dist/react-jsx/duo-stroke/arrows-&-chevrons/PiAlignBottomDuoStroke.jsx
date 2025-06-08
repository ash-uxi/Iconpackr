import React from 'react';

/**
 * PiAlignBottomDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignBottomDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-bottom icon',
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
      <path d="M5 20H19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.91675 11.9691C8.9754 13.4233 10.2121 14.7294 11.5956 15.8551C11.7143 15.9517 11.8572 16 12.0001 16M16.0834 11.9691C15.0248 13.4233 13.788 14.7294 12.4045 15.8551C12.2859 15.9517 12.143 16 12.0001 16M12.0001 16V4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
