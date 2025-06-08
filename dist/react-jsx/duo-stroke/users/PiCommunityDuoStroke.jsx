import React from 'react';

/**
 * PiCommunityDuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCommunityDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'community icon',
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
      <path d="M14.0766 15.9781C14.0766 14.5446 15.2387 13.3825 16.6723 13.3825C18.1058 13.3825 19.2679 14.5446 19.2679 15.9781C19.2679 17.4116 18.1058 18.5737 16.6723 18.5737C15.2387 18.5737 14.0766 17.4116 14.0766 15.9781Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M14.0766 5.59562C14.0766 4.1621 15.2387 3 16.6723 3C18.1058 3 19.2679 4.1621 19.2679 5.59562C19.2679 7.02914 18.1058 8.19123 16.6723 8.19123C15.2387 8.19123 14.0766 7.02914 14.0766 5.59562Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.65625 10.6175C3.68969 9.14993 5.39706 8.19116 7.32836 8.19116C9.25966 8.19116 10.967 9.14993 12.0005 10.6175C13.0339 9.14993 14.7413 8.19116 16.6726 8.19116C18.6039 8.19116 20.3113 9.14993 21.3447 10.6175M2.65625 20.9999C3.68969 19.5324 5.39706 18.5736 7.32836 18.5736C9.25966 18.5736 10.967 19.5324 12.0005 20.9999C13.0339 19.5324 14.7413 18.5736 16.6726 18.5736C18.6039 18.5736 20.3113 19.5324 21.3447 20.9999" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4.73242 15.9781C4.73242 14.5446 5.89452 13.3825 7.32804 13.3825C8.76156 13.3825 9.92366 14.5446 9.92366 15.9781C9.92366 17.4116 8.76156 18.5737 7.32804 18.5737C5.89452 18.5737 4.73242 17.4116 4.73242 15.9781Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4.73242 5.59562C4.73242 4.1621 5.89452 3 7.32804 3C8.76156 3 9.92366 4.1621 9.92366 5.59562C9.92366 7.02914 8.76156 8.19123 7.32804 8.19123C5.89452 8.19123 4.73242 7.02914 4.73242 5.59562Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
