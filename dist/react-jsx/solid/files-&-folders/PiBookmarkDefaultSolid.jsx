import React from 'react';

/**
 * PiBookmarkDefaultSolid icon from the solid style in files-&-folders category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBookmarkDefaultSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bookmark-default icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11.8005 0.999912C10.1315 0.999469 9.05211 0.999182 8.14597 1.29361C6.31934 1.88711 4.88724 3.31922 4.29373 5.14584C3.9993 6.05199 3.99959 7.13137 4.00003 8.80038L4.00007 21.9999C4.00007 22.3905 4.22741 22.7453 4.58221 22.9085C4.93701 23.0716 5.35435 23.0134 5.65086 22.7592L7.44453 21.2218C8.37996 20.42 9.0397 19.8554 9.59342 19.4494C10.137 19.0508 10.5196 18.8503 10.8814 18.745C11.612 18.5321 12.3881 18.5321 13.1187 18.745C13.4805 18.8503 13.8631 19.0508 14.4067 19.4494C14.9604 19.8554 15.6202 20.42 16.5556 21.2218L18.3493 22.7592C18.6458 23.0134 19.0631 23.0716 19.4179 22.9085C19.7727 22.7453 20.0001 22.3905 20.0001 21.9999L20.0001 8.80038C20.0005 7.13138 20.0008 6.05199 19.7064 5.14584C19.1129 3.31922 17.6808 1.88711 15.8542 1.29361C14.948 0.999182 13.8686 0.999469 12.1996 0.999912H11.8005Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
