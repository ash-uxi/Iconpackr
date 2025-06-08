import React from 'react';

/**
 * PiTextQuotesParagraphDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextQuotesParagraphDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'text-quotes-paragraph icon',
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
      <path d="M10.5 7H12C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9H11.5C10.6716 9 10 8.32843 10 7.5V6.4C10 5.07452 11.0745 4 12.4 4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M17 7L21 7" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 14H21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 20H21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3.5 7H5C5.55228 7 6 7.44772 6 8C6 8.55228 5.55228 9 5 9H4.5C3.67157 9 3 8.32843 3 7.5V6.4C3 5.07452 4.07452 4 5.4 4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
