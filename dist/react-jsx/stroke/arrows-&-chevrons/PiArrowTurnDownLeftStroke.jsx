import React from 'react';

/**
 * PiArrowTurnDownLeftStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnDownLeftStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-down-left icon',
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
      <path d="M8.85867 20C7.10583 18.7037 5.53153 17.1893 4.1746 15.4953C4.0582 15.3499 4 15.175 4 15M8.85867 10C7.10583 11.2963 5.53153 12.8107 4.1746 14.5047C4.0582 14.6501 4 14.825 4 15M4 15H12C14.8003 15 16.2004 15 17.27 14.455C18.2108 13.9757 18.9757 13.2108 19.455 12.27C20 11.2004 20 9.80026 20 7L20 4" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
