import React from 'react';

/**
 * PiBugDuoStroke icon from the duo-stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBugDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bug icon',
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
      <path d="M14.8293 7C14.9398 6.68722 15 6.35064 15 6C15 4.34315 13.6569 3 12 3C10.3431 3 9 4.34315 9 6C9 6.35064 9.06015 6.68722 9.17071 7M14.8293 7H16.7591C17.2323 7.47028 17.6448 8.0098 17.9824 8.60353C18.628 9.73912 19 11.073 19 12.5C19 13.4895 18.8211 14.4343 18.4962 15.2992C17.4608 18.0549 14.9424 20 12 20C9.05757 20 6.53917 18.0549 5.50383 15.2992C5.17886 14.4343 5 13.4895 5 12.5C5 11.073 5.37195 9.73912 6.01764 8.60353C6.35523 8.0098 6.76766 7.47028 7.24087 7H9.17071M14.8293 7H9.17071" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 3V5.54059C21 6.97063 19.9906 8.20188 18.5883 8.48233L17.9824 8.60353M3 3V5.54059C3 6.97063 4.00938 8.20188 5.41165 8.48233L6.01764 8.60353M22 21V18.4594C22 17.0294 20.9906 15.7981 19.5883 15.5177L18.4962 15.2992M2 21V18.4594C2 17.0294 3.00938 15.7981 4.41165 15.5177L5.50383 15.2992M12 20V13" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
