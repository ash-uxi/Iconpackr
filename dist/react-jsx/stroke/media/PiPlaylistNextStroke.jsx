import React from 'react';

/**
 * PiPlaylistNextStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlaylistNextStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'playlist-next icon',
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
      <path d="M12.1983 13.0098C13.1853 13.75 14.0766 14.6088 14.8525 15.5662C14.9574 15.6957 15.0099 15.8527 15.0099 16.0098M12.1983 19.0098C13.1853 18.2695 14.0766 17.4108 14.8525 16.4533C14.9574 16.3238 15.0099 16.1668 15.0099 16.0098M15.0099 16.0098H8.99023" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5 6H19M7 2.00127L17 2M7 22H17C18.4001 22 19.1002 22 19.635 21.7275C20.1054 21.4878 20.4878 21.1054 20.7275 20.635C21 20.1002 21 19.4001 21 18V14C21 12.5999 21 11.8998 20.7275 11.365C20.4878 10.8946 20.1054 10.5122 19.635 10.2725C19.1002 10 18.4001 10 17 10H7C5.59987 10 4.8998 10 4.36502 10.2725C3.89462 10.5122 3.51217 10.8946 3.27248 11.365C3 11.8998 3 12.5999 3 14V18C3 19.4001 3 20.1002 3.27248 20.635C3.51217 21.1054 3.89462 21.4878 4.36502 21.7275C4.8998 22 5.59987 22 7 22Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
