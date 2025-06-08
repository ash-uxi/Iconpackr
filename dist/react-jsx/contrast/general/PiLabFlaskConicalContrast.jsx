import React from 'react';

/**
 * PiLabFlaskConicalContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLabFlaskConicalContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'lab-flask-conical icon',
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
      <path fill="currentColor" d="M17.666 21H6.334c-2.028 0-3.212-2.29-2.04-3.945l2.47-3.486c5.623-2.587 7.158 3.073 11.311 1.185l1.63 2.301c1.173 1.656-.01 3.945-2.04 3.945" opacity=".28"/>
  <path d="M9 16h.01M10 3h4m-4 0H9m1 0v5.523a1.5 1.5 0 0 1-.276.867l-2.96 4.179M14 3h1m-1 0v5.523c0 .31.096.613.276.867l3.8 5.364m0 0 1.63 2.301c1.172 1.656-.012 3.945-2.04 3.945H6.334c-2.028 0-3.212-2.29-2.04-3.945l2.47-3.486m11.311 1.185c-4.153 1.887-5.687-3.773-11.311-1.185"/>
    </svg>
  );
}
