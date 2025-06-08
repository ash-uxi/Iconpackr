import React from 'react';

/**
 * PiLeetcodeStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLeetcodeStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'leetcode icon',
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
      <path d="M6.89673 8.90405L6.86005 8.94177C5.55245 10.2867 4.89864 10.9592 4.54144 11.6803C3.81952 13.1376 3.81952 14.8624 4.54144 16.3197C4.89864 17.0408 5.55245 17.7133 6.86005 19.0582C8.16765 20.4032 8.82147 21.0757 9.52251 21.4431C10.9394 22.1856 12.6162 22.1856 14.033 21.4431C14.7341 21.0757 15.3879 20.4032 16.6955 19.0582L16.697 19.0566C16.8299 18.92 16.9561 18.7902 17.0758 18.6667M6.89673 8.90405C8.17995 7.5842 8.82805 6.92087 9.52251 6.55691C10.9394 5.81436 12.6162 5.81436 14.033 6.55691C14.7341 6.92431 15.3879 7.59681 16.6955 8.94177C16.829 9.07904 16.9556 9.20931 17.0758 9.33333M6.89673 8.90405L13.609 2M10.6667 14.2222H20.6667" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
