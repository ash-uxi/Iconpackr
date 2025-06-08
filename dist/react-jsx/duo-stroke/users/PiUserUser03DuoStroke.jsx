import React from 'react';

/**
 * PiUserUser03DuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserUser03DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-user-03 icon',
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
      <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.86595 21.0001H18.1341C19.1646 21.0001 20 20.1647 20 19.1341C20 16.0501 17.0608 13.8149 14.0889 14.6388L13.393 14.8317C12.4815 15.0844 11.5185 15.0844 10.607 14.8317L9.91111 14.6388C6.9392 13.8149 4 16.0501 4 19.1341C4 20.1647 4.83541 21.0001 5.86595 21.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
