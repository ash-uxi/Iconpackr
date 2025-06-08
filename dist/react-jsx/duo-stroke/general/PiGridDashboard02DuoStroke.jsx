import React from 'react';

/**
 * PiGridDashboard02DuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGridDashboard02DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'grid-dashboard-02 icon',
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
      <g opacity="0.28"  fill="none"><path d="M3 6.2C3 5.0799 3 4.51984 3.21799 4.09202C3.40973 3.71569 3.71569 3.40973 4.09202 3.21799C4.51984 3 5.0799 3 6.2 3H6.8C7.9201 3 8.48016 3 8.90798 3.21799C9.28431 3.40973 9.59027 3.71569 9.78201 4.09202C10 4.51984 10 5.0799 10 6.2V6.8C10 7.9201 10 8.48016 9.78201 8.90798C9.59027 9.28431 9.28431 9.59027 8.90798 9.78201C8.48016 10 7.9201 10 6.8 10H6.2C5.0799 10 4.51984 10 4.09202 9.78201C3.71569 9.59027 3.40973 9.28431 3.21799 8.90798C3 8.48016 3 7.9201 3 6.8V6.2Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/><path d="M14 17.2C14 16.0799 14 15.5198 14.218 15.092C14.4097 14.7157 14.7157 14.4097 15.092 14.218C15.5198 14 16.0799 14 17.2 14H17.8C18.9201 14 19.4802 14 19.908 14.218C20.2843 14.4097 20.5903 14.7157 20.782 15.092C21 15.5198 21 16.0799 21 17.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H17.2C16.0799 21 15.5198 21 15.092 20.782C14.7157 20.5903 14.4097 20.2843 14.218 19.908C14 19.4802 14 18.9201 14 17.8V17.2Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/></g>
  <path d="M14 6.2C14 5.0799 14 4.51984 14.218 4.09202C14.4097 3.71569 14.7157 3.40973 15.092 3.21799C15.5198 3 16.0799 3 17.2 3H17.8C18.9201 3 19.4802 3 19.908 3.21799C20.2843 3.40973 20.5903 3.71569 20.782 4.09202C21 4.51984 21 5.0799 21 6.2V6.8C21 7.9201 21 8.48016 20.782 8.90798C20.5903 9.28431 20.2843 9.59027 19.908 9.78201C19.4802 10 18.9201 10 17.8 10H17.2C16.0799 10 15.5198 10 15.092 9.78201C14.7157 9.59027 14.4097 9.28431 14.218 8.90798C14 8.48016 14 7.9201 14 6.8V6.2Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 17.2C3 16.0799 3 15.5198 3.21799 15.092C3.40973 14.7157 3.71569 14.4097 4.09202 14.218C4.51984 14 5.0799 14 6.2 14H6.8C7.9201 14 8.48016 14 8.90798 14.218C9.28431 14.4097 9.59027 14.7157 9.78201 15.092C10 15.5198 10 16.0799 10 17.2V17.8C10 18.9201 10 19.4802 9.78201 19.908C9.59027 20.2843 9.28431 20.5903 8.90798 20.782C8.48016 21 7.9201 21 6.8 21H6.2C5.0799 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V17.2Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
