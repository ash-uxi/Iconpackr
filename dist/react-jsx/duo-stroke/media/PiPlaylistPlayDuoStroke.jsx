import React from 'react';

/**
 * PiPlaylistPlayDuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlaylistPlayDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'playlist-play icon',
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
      <path d="M3 14C3 12.5999 3 11.8998 3.27248 11.365C3.51217 10.8946 3.89462 10.5122 4.36502 10.2725C4.8998 10 5.59987 10 7 10H17C18.4001 10 19.1002 10 19.635 10.2725C20.1054 10.5122 20.4878 10.8946 20.7275 11.365C21 11.8998 21 12.5999 21 14V18C21 19.4001 21 20.1002 20.7275 20.635C20.4878 21.1054 20.1054 21.4878 19.635 21.7275C19.1002 22 18.4001 22 17 22H7C5.59987 22 4.8998 22 4.36502 21.7275C3.89462 21.4878 3.51217 21.1054 3.27248 20.635C3 20.1002 3 19.4001 3 18V14Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 6H19M7 2.00127L17 2" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.48486 15.8393C9.48486 14.4075 9.48486 13.6915 9.78409 13.2919C10.0449 12.9435 10.444 12.7256 10.878 12.6946C11.376 12.6591 11.9782 13.0462 13.1827 13.8205L13.3445 13.9245C14.3896 14.5964 14.9122 14.9323 15.0927 15.3595C15.2504 15.7327 15.2504 16.1539 15.0927 16.5271C14.9122 16.9543 14.3896 17.2903 13.3445 17.9621L13.1827 18.0662C11.9782 18.8404 11.376 19.2276 10.878 19.192C10.444 19.161 10.0449 18.9431 9.78409 18.5948C9.48486 18.1951 9.48486 17.4792 9.48486 16.0473V15.8393Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
