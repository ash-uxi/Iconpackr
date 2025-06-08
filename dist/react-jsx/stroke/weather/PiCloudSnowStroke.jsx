import React from 'react';

/**
 * PiCloudSnowStroke icon from the stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudSnowStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-snow icon',
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
      <path d="M6.01705 9.02561C6.00575 9.18227 6 9.34046 6 9.5M6.01705 9.02561C3.75887 9.26656 2 11.1779 2 13.5C2 15.1906 2.93233 16.6635 4.31089 17.4326M6.01705 9.02561C6.26002 5.65723 9.06969 3 12.5 3C15.3713 3 17.8077 4.86169 18.6681 7.44382C20.6276 8.28516 22 10.2323 22 12.5C22 14.5066 20.9254 16.2622 19.3204 17.2228M8 15V15.01M12 16V16.01M16 15V15.01M8 19V19.01M12 20V20.01M16 19V19.01" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
