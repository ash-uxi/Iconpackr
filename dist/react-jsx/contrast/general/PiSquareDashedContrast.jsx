import React from 'react';

/**
 * PiSquareDashedContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSquareDashedContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'square-dashed icon',
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
      <path d="M20.256 17.895A6 6 0 0 1 18 20.196m2.989-10.301C21 10.497 21 11.19 21 12c0 .717 0 1.343-.008 1.895M6 20.196a6 6 0 0 1-2.256-2.302m-.733-8C3 10.498 3 11.19 3 12c0 .717 0 1.343.008 1.895M10 20.99c.577.009 1.237.009 2 .009s1.423 0 2-.01m6.134-15.095A6 6 0 0 0 18 3.804m-8-.795C10.577 3 11.237 3 12 3s1.423 0 2 .01m-8 .794a6 6 0 0 0-2.134 2.09"/>
  <path fill="currentColor" d="M3 12c0-2.796 0-4.193.457-5.296a6 6 0 0 1 3.247-3.247C7.807 3 9.204 3 12 3s4.194 0 5.296.457a6 6 0 0 1 3.247 3.247C21 7.807 21 9.204 21 12s0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 21 14.796 21 12 21s-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 16.194 3 14.796 3 12" opacity=".28"/>
    </svg>
  );
}
