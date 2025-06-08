import React from 'react';

/**
 * PiDivertRightSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDivertRightSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'divert-right icon',
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
      <path d="M20.4393 7.09132C18.5812 6.91943 16.6973 6.99044 14.8349 7.30231C14.4459 7.36744 14.1316 7.65504 14.0323 8.03666C13.9329 8.41828 14.0671 8.82265 14.3749 9.06914L15.4744 9.94964C15.8737 10.2694 16.2619 10.6021 16.6385 10.9473L12.4142 15.1716C11.6331 15.9527 10.3669 15.9527 9.58581 15.1716L2.70711 8.29289C2.31658 7.90237 1.68342 7.90237 1.29289 8.29289C0.902369 8.68342 0.902369 9.31658 1.29289 9.70711L8.17159 16.5858C9.73372 18.1479 12.2663 18.1479 13.8284 16.5858L18.0527 12.3615C18.3979 12.7381 18.7306 13.1263 19.0504 13.5256L19.9309 14.6251C20.1774 14.9329 20.5817 15.0671 20.9633 14.9677C21.345 14.8684 21.6326 14.5541 21.6977 14.1651C22.0096 12.3026 22.0806 10.4189 21.9087 8.5607C21.873 8.17518 21.7047 7.82357 21.4406 7.55945C21.1765 7.29536 20.8248 7.127 20.4393 7.09132Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
