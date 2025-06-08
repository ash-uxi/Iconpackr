import React from 'react';

/**
 * PiCrownWinnerKingDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCrownWinnerKingDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'crown-winner-king icon',
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
      <path d="M1.57324 6.93967C1.4311 6.32372 2.18424 5.9063 2.63123 6.35329C5.18646 8.90852 9.52189 8.01863 10.864 4.66345L11.6289 2.75112C11.7628 2.41629 12.2368 2.41629 12.3707 2.75112L13.1356 4.66345C14.4777 8.01863 18.8132 8.90852 21.3684 6.35329C21.8154 5.9063 22.5685 6.32372 22.4264 6.93967L19.9415 17.7073C14.8211 15.7871 9.17847 15.7871 4.05808 17.7073L1.57324 6.93967Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M19.2291 21.5004C14.568 19.7525 9.43155 19.7525 4.77051 21.5004" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
