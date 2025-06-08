import React from 'react';

/**
 * PiArrowTurnDownRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnDownRightDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-down-right icon',
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
      <path d="M15.1414 20C16.8942 18.7037 18.4685 17.1893 19.8254 15.4953C19.9418 15.3499 20 15.175 20 15C20 14.825 19.9418 14.6501 19.8254 14.5047C18.4685 12.8107 16.8942 11.2963 15.1414 10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 15H12C9.19974 15 7.79961 15 6.73005 14.455C5.78924 13.9757 5.02433 13.2108 4.54497 12.27C4 11.2004 4 9.80026 4 7V4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
