import React from 'react';

/**
 * PiCashDuoStroke icon from the duo-stroke style in money-&-payments category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCashDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cash icon',
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
      <path d="M2 8.2C2 7.07989 2 6.51984 2.21799 6.09202C2.40973 5.71569 2.71569 5.40973 3.09202 5.21799C3.51984 5 4.07989 5 5.2 5H18.8C19.9201 5 20.4802 5 20.908 5.21799C21.2843 5.40973 21.5903 5.71569 21.782 6.09202C22 6.51984 22 7.0799 22 8.2V15.8C22 16.9201 22 17.4802 21.782 17.908C21.5903 18.2843 21.2843 18.5903 20.908 18.782C20.4802 19 19.9201 19 18.8 19H5.2C4.0799 19 3.51984 19 3.09202 18.782C2.71569 18.5903 2.40973 18.2843 2.21799 17.908C2 17.4802 2 16.9201 2 15.8V8.2Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20.908 5.21799C20.4802 5 19.9201 5 18.8 5H18V5.8C18 6.9201 18 7.48016 18.218 7.90798C18.4097 8.28431 18.7157 8.59027 19.092 8.78201C19.5198 9 20.0799 9 21.2 9H22V8.2C22 7.07989 22 6.51984 21.782 6.09202C21.5903 5.71569 21.2843 5.40973 20.908 5.21799Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21.782 17.908C22 17.4802 22 16.9201 22 15.8V15H21.2C20.0799 15 19.5198 15 19.092 15.218C18.7157 15.4097 18.4097 15.7157 18.218 16.092C18 16.5198 18 17.0799 18 18.2V19H18.8C19.9201 19 20.4802 19 20.908 18.782C21.2843 18.5903 21.5903 18.2843 21.782 17.908Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3.09202 18.782C3.51984 19 4.0799 19 5.2 19H6V18.2C6 17.0799 6 16.5198 5.78201 16.092C5.59027 15.7157 5.28431 15.4097 4.90798 15.218C4.48016 15 3.9201 15 2.8 15H2V15.8C2 16.9201 2 17.4802 2.21799 17.908C2.40973 18.2843 2.71569 18.5903 3.09202 18.782Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3.09202 5.21799C3.51984 5 4.07989 5 5.2 5H6V5.8C6 6.9201 6 7.48016 5.78201 7.90798C5.59027 8.28431 5.28431 8.59027 4.90798 8.78201C4.48016 9 3.9201 9 2.8 9H2V8.2C2 7.0799 2 6.51984 2.21799 6.09202C2.40973 5.71569 2.71569 5.40973 3.09202 5.21799Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
