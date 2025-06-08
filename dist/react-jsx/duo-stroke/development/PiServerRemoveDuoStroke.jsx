import React from 'react';

/**
 * PiServerRemoveDuoStroke icon from the duo-stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiServerRemoveDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'server-remove icon',
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
      <path d="M13 8H13.01M17 8H17.01M13 16H13.01M16 19H22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7 12H17M7 12C6.536 12 6.303 12 6.108 12.022C5.32013 12.1108 4.58575 12.4645 4.02511 13.0251C3.46447 13.5857 3.1108 14.3201 3.022 15.108C3 15.303 3 15.536 3 16C3 16.464 3 16.697 3.022 16.892C3.1108 17.6799 3.46447 18.4143 4.02511 18.9749C4.58575 19.5355 5.32013 19.8892 6.108 19.978C6.303 20 6.536 20 7 20H12.1211M7 12C6.536 12 6.303 12 6.108 11.978C5.32013 11.8892 4.58575 11.5355 4.02511 10.9749C3.46447 10.4143 3.1108 9.67987 3.022 8.892C3 8.697 3 8.464 3 8C3 7.536 3 7.303 3.022 7.108C3.1108 6.32013 3.46447 5.58575 4.02511 5.02511C4.58575 4.46447 5.32013 4.1108 6.108 4.022C6.303 4 6.536 4 7 4H17C17.464 4 17.697 4 17.892 4.022C18.6799 4.1108 19.4143 4.46447 19.9749 5.02511C20.5355 5.58575 20.8892 6.32013 20.978 7.108C21 7.303 21 7.536 21 8C21 8.464 21 8.697 20.978 8.892C20.8892 9.67987 20.5355 10.4143 19.9749 10.9749C19.4143 11.5355 18.6799 11.8892 17.892 11.978C17.697 12 17.464 12 17 12M17 12C17.464 12 17.697 12 17.892 12.022C18.6799 12.1108 19.4143 12.4645 19.9749 13.0251C20.5098 13.56 20.8563 14.2532 20.9641 15" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
