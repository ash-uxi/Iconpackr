import React from 'react';

/**
 * PiFaceEvilSmileDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceEvilSmileDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-evil-smile icon',
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
      <path d="M2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.38574 9.14453L9.61447 10.0049M14.3853 10.0049L15.614 9.14453M15.5705 14.5002C14.663 15.4259 13.3985 16.0002 11.9998 16.0002C10.6011 16.0002 9.33654 15.4259 8.42907 14.5002" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
