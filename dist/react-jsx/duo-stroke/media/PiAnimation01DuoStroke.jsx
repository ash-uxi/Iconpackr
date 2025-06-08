import React from 'react';

/**
 * PiAnimation01DuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAnimation01DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'animation-01 icon',
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
      <path d="M15.6855 15.0175C14.9037 16.8307 13.1001 18.1 11.0001 18.1C10.9715 18.1 10.943 18.0997 10.9146 18.0993M8.98285 8.31445C7.16948 9.09621 5.9001 10.8998 5.9001 13C5.9001 13.0285 5.90033 13.0571 5.9008 13.0855M5.9008 13.0855C4.14479 13.549 2.8501 15.1483 2.8501 17.05C2.8501 19.3144 4.68573 21.15 6.9501 21.15C8.85179 21.15 10.4511 19.8553 10.9146 18.0993M5.9008 13.0855C5.94601 15.8343 8.16585 18.0541 10.9146 18.0993" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M8.9502 8.9501C8.9502 5.58116 11.6813 2.8501 15.0502 2.8501C18.4191 2.8501 21.1502 5.58116 21.1502 8.9501C21.1502 12.319 18.4191 15.0501 15.0502 15.0501C11.6813 15.0501 8.9502 12.319 8.9502 8.9501Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
