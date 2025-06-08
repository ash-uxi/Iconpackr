import React from 'react';

/**
 * PiInputFieldDuoStroke icon from the duo-stroke style in devices category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiInputFieldDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'input-field icon',
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
      <path d="M17 7H7C6.07069 7 5.60603 7 5.21964 7.07686C3.63288 7.39249 2.39249 8.63288 2.07686 10.2196C2 10.606 2 11.0707 2 12C2 12.9293 2 13.394 2.07686 13.7804C2.39249 15.3671 3.63288 16.6075 5.21964 16.9231C5.60603 17 6.07069 17 7 17H17M20 7.5357C20.98 8.10167 21.6944 9.06969 21.9231 10.2196C22 10.606 22 11.0707 22 12C22 12.9293 22 13.394 21.9231 13.7804C21.6944 14.9303 20.98 15.8983 20 16.4643" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M17 7V17M17 7C17 6.07003 17 5.60504 16.8978 5.22354C16.6204 4.18827 15.8117 3.37962 14.7765 3.10222C14.395 3 13.93 3 13 3M17 7C17 6.07003 17 5.60504 17.1022 5.22354C17.3796 4.18827 18.1883 3.37962 19.2235 3.10222C19.605 3 20.07 3 21 3M17 17C17 17.93 17 18.395 16.8978 18.7765C16.6204 19.8117 15.8117 20.6204 14.7765 20.8978C14.395 21 13.93 21 13 21M17 17C17 17.93 17 18.395 17.1022 18.7765C17.3796 19.8117 18.1883 20.6204 19.2235 20.8978C19.605 21 20.07 21 21 21M7 13C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11C7.55228 11 8 11.4477 8 12C8 12.5523 7.55228 13 7 13ZM13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12C14 12.5523 13.5523 13 13 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
