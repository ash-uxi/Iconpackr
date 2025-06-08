import React from 'react';

/**
 * PiNavigationSlantSolid icon from the solid style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNavigationSlantSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'navigation-slant icon',
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
      <path d="M20.1076 2.04386C21.2115 1.80731 22.1921 2.7879 21.9556 3.89178C20.6736 9.87441 18.3495 15.585 15.0895 20.7626L14.7843 21.2474C14.0302 22.445 12.205 22.1363 11.8868 20.7572L10.539 14.9168C10.3719 14.1928 9.80661 13.6275 9.08265 13.4604L3.24217 12.1126C1.8631 11.7944 1.55437 9.96923 2.75207 9.21512L3.23681 8.90991C8.41444 5.64992 14.125 3.32585 20.1076 2.04386Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
