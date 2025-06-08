import React from 'react';

/**
 * PiLock02OpenContrast icon from the contrast style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLock02OpenContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'lock-02-open icon',
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
      <path d="M13 10.183V7.5a4.5 4.5 0 1 1 9 0V10m-9 .183C12.397 10 11.584 10 10.2 10H6.8c-1.384 0-2.197 0-2.8.183a2 2 0 0 0-.362.144 3 3 0 0 0-1.311 1.311C2 12.28 2 13.12 2 14.8v1.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C4.28 21 5.12 21 6.8 21h3.4c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C15 18.72 15 17.88 15 16.2v-1.4c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311 2 2 0 0 0-.362-.144"/>
  <path fill="currentColor" d="M2 14.8c0-1.68 0-2.52.327-3.162a3 3 0 0 1 1.311-1.311C4.28 10 5.12 10 6.8 10h3.4c1.68 0 2.52 0 3.162.327a3 3 0 0 1 1.311 1.311C15 12.28 15 13.12 15 14.8v1.4c0 1.68 0 2.52-.327 3.162a3 3 0 0 1-1.311 1.311C12.72 21 11.88 21 10.2 21H6.8c-1.68 0-2.52 0-3.162-.327a3 3 0 0 1-1.311-1.311C2 18.72 2 17.88 2 16.2z" opacity=".28"/>
    </svg>
  );
}
