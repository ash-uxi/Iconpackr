import React from 'react';

/**
 * PiStoreDefaultStroke icon from the stroke style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStoreDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'store-default icon',
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
      <path d="M20 13.7485C21.0507 13.2084 21.7695 12.1136 21.7695 10.8509C21.7695 9.67127 21.5494 8.4998 21.4322 7.32819C21.3079 6.08506 21.2965 4.69904 20.3151 3.79703C19.3176 2.8802 17.9235 3.00581 16.6561 3.00581H7.34394C6.0765 3.00581 4.6824 2.8802 3.68487 3.79703C2.70345 4.69904 2.69208 6.08506 2.56776 7.32819C2.45061 8.49974 2.23425 9.67135 2.23425 10.8509C2.23425 12.1121 2.95132 13.2058 4 13.7465M20 13.7485C19.5544 13.9775 19.0491 14.1068 18.5137 14.1068C16.7155 14.1068 15.2578 12.6491 15.2578 10.8509C15.2578 12.6491 13.8001 14.1068 12.0019 14.1068C10.2037 14.1068 8.74601 12.6491 8.74601 10.8509C8.74601 12.6491 7.28831 14.1068 5.49013 14.1068C4.95314 14.1068 4.44651 13.9768 4 13.7465M20 13.7485V18.6058C20 19.4459 20 19.8659 19.8365 20.1868C19.6927 20.469 19.4632 20.6985 19.181 20.8423C18.8601 21.0058 18.4401 21.0058 17.6 21.0058H6.4C5.55992 21.0058 5.13988 21.0058 4.81901 20.8423C4.53677 20.6985 4.3073 20.469 4.16349 20.1868C4 19.8659 4 19.4459 4 18.6058V13.7465" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
