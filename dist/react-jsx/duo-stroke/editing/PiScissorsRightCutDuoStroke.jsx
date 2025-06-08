import React from 'react';

/**
 * PiScissorsRightCutDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiScissorsRightCutDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'scissors-right-cut icon',
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
      <path d="M17.125 11.875H16.125M21.125 11.875H20.125M8.28102 14.9138C7.68714 14.3199 6.88166 13.9863 6.04178 13.9863C5.20189 13.9863 4.39641 14.3199 3.80253 14.9138C3.20864 15.5077 2.875 16.3132 2.875 17.153C2.875 17.9929 3.20864 18.7984 3.80253 19.3923C4.39641 19.9862 5.20189 20.3198 6.04178 20.3198C6.88166 20.3198 7.68714 19.9862 8.28102 19.3923C8.87491 18.7984 9.20855 17.9929 9.20855 17.153C9.20855 16.3132 8.87491 15.5077 8.28102 14.9138ZM8.28102 8.8362C8.87491 8.24232 9.20855 7.43683 9.20855 6.59695C9.20855 5.75707 8.87491 4.95159 8.28102 4.3577C7.68714 3.76382 6.88166 3.43018 6.04178 3.43018C5.20189 3.43018 4.39641 3.76382 3.80253 4.3577C3.20864 4.95159 2.875 5.75707 2.875 6.59695C2.875 7.43683 3.20864 8.24232 3.80253 8.8362C4.39641 9.43009 5.20189 9.76373 6.04178 9.76373C6.88166 9.76373 7.68714 9.43009 8.28102 8.8362Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M18.7086 19.2636L11.32 11.8751M11.32 11.8751L18.7086 4.48657M11.32 11.8751L8.28125 14.9139M11.32 11.8751L8.28125 8.8363" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
