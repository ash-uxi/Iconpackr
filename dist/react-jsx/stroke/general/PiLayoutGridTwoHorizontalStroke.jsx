import React from 'react';

/**
 * PiLayoutGridTwoHorizontalStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLayoutGridTwoHorizontalStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'layout-grid-two-horizontal icon',
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
      <path d="M6.2 10C5.0799 10 4.51984 10 4.09202 9.78201C3.71569 9.59027 3.40973 9.28431 3.21799 8.90798C3 8.48016 3 7.9201 3 6.8L3 6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.7157 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3L17.8 3C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.07989 21 6.2V6.8C21 7.9201 21 8.48016 20.782 8.90798C20.5903 9.2843 20.2843 9.59027 19.908 9.78201C19.4802 10 18.9201 10 17.8 10L6.2 10Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M6.2 21C5.0799 21 4.51984 21 4.09202 20.782C3.7157 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8L3 17.2C3 16.0799 3 15.5198 3.21799 15.092C3.40973 14.7157 3.7157 14.4097 4.09202 14.218C4.51984 14 5.0799 14 6.2 14L17.8 14C18.9201 14 19.4802 14 19.908 14.218C20.2843 14.4097 20.5903 14.7157 20.782 15.092C21 15.5198 21 16.0799 21 17.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H6.2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
