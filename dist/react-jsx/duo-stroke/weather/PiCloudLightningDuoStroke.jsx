import React from 'react';

/**
 * PiCloudLightningDuoStroke icon from the duo-stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudLightningDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-lightning icon',
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
      <path d="M13.06 11L9.99995 15.5C9.79881 15.7718 9.99049 16.1231 10.3738 16.1852L14.4641 16.8485C14.8445 16.9102 15.037 17.2571 14.8415 17.5289L11.364 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6.01705 9.02561C6.00575 9.18227 6 9.34046 6 9.5C6 10.0163 6.06019 10.5185 6.17393 11M6.01705 9.02561C3.75887 9.26656 2 11.1779 2 13.5C2 15.9853 4.01472 18 6.5 18H6.55078M6.01705 9.02561C6.26002 5.65723 9.06969 3 12.5 3C15.3713 3 17.8077 4.86169 18.6681 7.44382C20.6276 8.28516 22 10.2323 22 12.5C22 14.5701 20.7907 16.5331 18.9235 17.4369" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
