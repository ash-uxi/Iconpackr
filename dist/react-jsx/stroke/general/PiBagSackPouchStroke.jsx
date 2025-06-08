import React from 'react';

/**
 * PiBagSackPouchStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBagSackPouchStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bag-sack-pouch icon',
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
      <path d="M14.8866 6.98758C14.3006 6.79509 13.6819 6.69011 13.0363 6.69011H10.9634C10.6415 6.69011 10.3262 6.71622 10.0184 6.76626M14.8866 6.98758C21.0716 9.01901 23.6216 20.7963 15.8087 21.7648C13.2792 22.0784 10.7206 22.0784 8.19104 21.7648C0.00710869 20.7503 3.19384 7.87572 10.0184 6.76626M14.8866 6.98758L16.664 2.54428L16.014 2.28428C14.7988 1.79821 13.4222 1.94155 12.3332 2.66753C11.4562 3.25225 10.3828 3.4646 9.34912 3.25787L8.37229 3.06251L10.0184 6.76626" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
