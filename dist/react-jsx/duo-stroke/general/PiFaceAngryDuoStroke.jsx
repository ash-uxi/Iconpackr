import React from 'react';

/**
 * PiFaceAngryDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceAngryDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-angry icon',
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
      <path d="M2.8501 12.0001C2.8501 6.94669 6.94669 2.8501 12.0001 2.8501C17.0535 2.8501 21.1501 6.94669 21.1501 12.0001C21.1501 17.0535 17.0535 21.1501 12.0001 21.1501C6.94669 21.1501 2.8501 17.0535 2.8501 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.38574 9.14502L9.61447 10.0054M14.3853 10.0054L15.614 9.14502M15.5705 16.0007C14.663 15.075 13.3985 14.5007 11.9998 14.5007C10.6011 14.5007 9.33654 15.075 8.42907 16.0007" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
