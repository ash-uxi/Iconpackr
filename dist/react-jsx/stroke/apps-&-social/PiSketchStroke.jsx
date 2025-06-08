import React from 'react';

/**
 * PiSketchStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSketchStroke({ 
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
      <path d="M17.5198 9.0247L13.3779 18.4429L12 21M17.5198 9.0247H6.48022M17.5198 9.0247H22.4994M17.5198 9.0247L12 3M6.48022 9.0247L10.6221 18.4429L12 21M6.48022 9.0247H1.50062M6.48022 9.0247L12 3M22.4994 9.0247C22.4897 8.6337 22.3661 8.2439 22.1263 7.90788L19.2241 3.84124C18.8473 3.31333 18.2389 3 17.5906 3H12M22.4994 9.0247C22.5114 9.50831 22.3491 9.99376 22.017 10.3815L13.5242 20.2984C13.1237 20.7662 12.5618 21 12 21M1.50062 9.0247C1.48864 9.50831 1.6509 9.99376 1.983 10.3815L10.4758 20.2984C10.8763 20.7661 11.4382 21 12 21M1.50062 9.0247C1.5103 8.6337 1.63388 8.2439 1.87369 7.90788L4.7759 3.84124C5.15266 3.31333 5.76107 3 6.40941 3H12" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
