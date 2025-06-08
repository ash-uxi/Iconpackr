import React from 'react';

/**
 * PiAlignLeftStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAlignLeftStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'align-left icon',
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
      <path d="M12.0309 7.91667C10.5767 8.97531 9.2706 10.212 8.14485 11.5955C8.04828 11.7142 8 11.8571 8 12M12.0309 16.0833C10.5767 15.0247 9.2706 13.788 8.14485 12.4045C8.04828 12.2858 8 12.1429 8 12M8 12L20 12M4 5V19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
