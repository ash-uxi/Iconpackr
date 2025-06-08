import React from 'react';

/**
 * PiScribbleDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiScribbleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'scribble icon',
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
      <path d="M3 10.2935C6.58807 7.0897 12.0496 4.30744 17.5138 3.03036C18.6322 2.76898 19.2674 4.264 18.303 4.88761C14.3573 7.43887 10.1168 10.632 7.21417 14.341C6.86225 14.6794 7.2751 15.2441 7.7043 15.0114C11.2921 13.0666 15.1841 10.8242 19.3978 11.0852C19.9411 11.1189 20.0971 11.8454 19.6155 12.0991C16.1212 13.8255 13.3598 15.7294 11.166 18.2699C10.4476 18.9045 11.1403 20.063 12.0393 19.7306C13.8406 19.0177 18.6623 15.8989 19.8592 18.8531" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M3 10.2935C6.58807 7.0897 12.0496 4.30744 17.5138 3.03036C18.6322 2.76898 19.2674 4.264 18.303 4.88761C14.3573 7.43887 10.1168 10.632 7.21417 14.341C6.86225 14.6794 7.2751 15.2441 7.7043 15.0114C9.40089 14.0918 11.1655 13.1056 13 12.349" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
