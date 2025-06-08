import React from 'react';

/**
 * PiBalanceScaleLawDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBalanceScaleLawDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'balance-scale-law icon',
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
      <path d="M1.80371 13C1.80427 12.5427 1.90311 12.0803 2.10814 11.6446L4.9997 5.5L7.89127 11.6446C8.0963 12.0803 8.19514 12.5427 8.1957 13M15.8037 13C15.8043 12.5427 15.9031 12.0803 16.1081 11.6446L18.9997 5.5L21.8913 11.6446C22.0963 12.0803 22.1951 12.5427 22.1957 13M11.9998 2V3.75074" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20.9998 4.99999C19.7313 5.63421 18.248 5.6778 16.9445 5.11916L15.3616 4.44077C14.2882 3.98075 13.144 3.75073 11.9998 3.75073M2.99976 4.99999C4.2682 5.63421 5.75153 5.6778 7.05503 5.11916L8.63792 4.44077C9.71132 3.98075 10.8555 3.75073 11.9998 3.75073M11.9998 3.75073V21M11.9998 21L15.9998 21M11.9998 21H7.99976M1.80371 13C1.80252 13.9823 2.25481 14.9413 3.08226 15.5619C4.21853 16.4141 5.78089 16.4141 6.91715 15.5619C7.7446 14.9413 8.1969 13.9823 8.1957 13M15.8037 13C15.8025 13.9823 16.2548 14.9413 17.0823 15.5619C18.2185 16.4141 19.7809 16.4141 20.9172 15.5619C21.7446 14.9413 22.1969 13.9823 22.1957 13" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
