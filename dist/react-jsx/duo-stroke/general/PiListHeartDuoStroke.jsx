import React from 'react';

/**
 * PiListHeartDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiListHeartDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'list-heart icon',
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
      <path d="M17.7143 18.3271C18.0857 18.3271 21.4286 16.5217 21.4286 13.994C21.4286 12.7301 20.3143 11.8431 19.2 11.8274C18.6429 11.8195 18.0857 12.0079 17.7143 12.5496C17.3429 12.0079 16.7761 11.8274 16.2286 11.8274C15.1143 11.8274 14 12.7301 14 13.994C14 16.5217 17.3429 18.3271 17.7143 18.3271Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H10M4 18H10M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
