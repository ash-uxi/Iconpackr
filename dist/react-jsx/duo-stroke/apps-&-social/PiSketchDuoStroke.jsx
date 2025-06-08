import React from 'react';

/**
 * PiSketchDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSketchDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'sketch icon',
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
      <path d="M22.1263 7.90788L19.2241 3.84124C18.8473 3.31333 18.2389 3 17.5906 3H6.40941C5.76107 3 5.15266 3.31333 4.7759 3.84124L1.87369 7.90788C1.63388 8.2439 1.5103 8.6337 1.50062 9.0247C1.48864 9.50831 1.6509 9.99376 1.983 10.3815L10.4758 20.2984C10.8763 20.7661 11.4382 21 12 21C12.5618 21 13.1237 20.7661 13.5242 20.2984L22.017 10.3815C22.3491 9.99376 22.5114 9.50831 22.4994 9.0247C22.4897 8.6337 22.3661 8.2439 22.1263 7.90788Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.48009 9.0247L10.622 18.4429L11.9999 21L13.3778 18.4429L17.5196 9.0247M6.48009 9.0247H17.5196M6.48009 9.0247H1.50049M6.48009 9.0247L11.9999 3L17.5196 9.0247M17.5196 9.0247H22.4993" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
