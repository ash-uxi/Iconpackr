import React from 'react';

/**
 * PiPlaylistDownloadStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlaylistDownloadStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'playlist-download icon',
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
      <path d="M15 16.2081C14.2598 17.1951 13.401 18.0864 12.4436 18.8622C12.3141 18.9672 12.157 19.0196 12 19.0196M9 16.2081C9.74024 17.1951 10.599 18.0864 11.5564 18.8622C11.6859 18.9672 11.843 19.0196 12 19.0196M12 19.0196V13" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5 6H19M7 2.00127L17 2M7 22H17C18.4001 22 19.1002 22 19.635 21.7275C20.1054 21.4878 20.4878 21.1054 20.7275 20.635C21 20.1002 21 19.4001 21 18V14C21 12.5999 21 11.8998 20.7275 11.365C20.4878 10.8946 20.1054 10.5122 19.635 10.2725C19.1002 10 18.4001 10 17 10H7C5.59987 10 4.8998 10 4.36502 10.2725C3.89462 10.5122 3.51217 10.8946 3.27248 11.365C3 11.8998 3 12.5999 3 14V18C3 19.4001 3 20.1002 3.27248 20.635C3.51217 21.1054 3.89462 21.4878 4.36502 21.7275C4.8998 22 5.59987 22 7 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
