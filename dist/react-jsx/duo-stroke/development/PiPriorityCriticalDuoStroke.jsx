import React from 'react';

/**
 * PiPriorityCriticalDuoStroke icon from the duo-stroke style in development category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPriorityCriticalDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'priority-critical icon',
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
      <path d="M11.3066 4.15972C9.25473 5.23358 7.39117 6.45628 5.75069 7.8048C5.26196 8.20655 5 8.77717 5 9.36888L5 20C6.81482 18.3966 8.93491 16.9565 11.3066 15.7153C11.5101 15.6088 11.755 15.5556 12 15.5556C12.245 15.5556 12.4899 15.6088 12.6934 15.7153C15.0651 16.9565 17.1852 18.3966 19 20L19 9.36888C19 8.77717 18.738 8.20655 18.2493 7.8048C16.6088 6.45628 14.7453 5.23358 12.6934 4.15972C12.4899 4.05324 12.245 4 12 4C11.755 4 11.5101 4.05324 11.3066 4.15972Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M5.19971 8.5C5.32615 8.23929 5.51125 8.00175 5.75084 7.8048C7.39132 6.45628 9.25488 5.23358 11.3068 4.15972C11.5102 4.05324 11.7552 4 12.0001 4C12.2451 4 12.4901 4.05324 12.6935 4.15972C14.7454 5.23358 16.609 6.45628 18.2495 7.8048C18.4891 8.00175 18.6741 8.23929 18.8006 8.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
