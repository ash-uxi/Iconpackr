import React from 'react';

/**
 * PiDeleteBackwardLeftDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDeleteBackwardLeftDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'delete-backward-left icon',
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
      <path d="M16 15L13 12M13 12L10 9M13 12L16 9M13 12L10 15" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.20601 11.3066C3.51576 9.36639 4.99716 7.59456 6.62512 6.02049C6.98294 5.6745 7.16186 5.50151 7.41047 5.35316C7.61699 5.22993 7.88604 5.12112 8.12018 5.06616C8.40202 5 8.68097 5 9.23887 5H17C18.4001 5 19.1002 5 19.635 5.27248C20.1054 5.51217 20.4878 5.89462 20.7275 6.36502C21 6.8998 21 7.59987 21 9V15C21 16.4001 21 17.1002 20.7275 17.635C20.4878 18.1054 20.1054 18.4878 19.635 18.7275C19.1002 19 18.4001 19 17 19H9.23887C8.68097 19 8.40202 19 8.12018 18.9338C7.88604 18.8789 7.61699 18.7701 7.41047 18.6468C7.16186 18.4985 6.98295 18.3255 6.62512 17.9795C4.99716 16.4054 3.51576 14.6336 2.20601 12.6934C2.06867 12.4899 2 12.245 2 12C2 11.755 2.06867 11.5101 2.20601 11.3066Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
