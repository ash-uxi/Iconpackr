import React from 'react';

/**
 * PiToggleOffDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiToggleOffDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'toggle-off icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M15.9031 4C18.0248 4 20.0596 4.84285 21.5599 6.34315C23.0602 7.84344 23.9031 9.87827 23.9031 12C23.9031 14.1217 23.0602 16.1566 21.5599 17.6569C20.0596 19.1571 18.0248 20 15.9031 20H9.90308C7.78134 20 5.74651 19.1571 4.24622 17.6569C2.74593 16.1566 1.90308 14.1217 1.90308 12C1.90308 9.87827 2.74593 7.84344 4.24622 6.34315C5.74651 4.84285 7.78134 4 9.90308 4H15.9031Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M9.90308 7C11.2292 7 12.5009 7.52678 13.4386 8.46447C14.3763 9.40215 14.9031 10.6739 14.9031 12C14.9031 13.3261 14.3763 14.5979 13.4386 15.5355C12.5009 16.4732 11.2292 17 9.90308 17C8.57699 17 7.30522 16.4732 6.36754 15.5355C5.42986 14.5979 4.90308 13.3261 4.90308 12C4.90308 10.6739 5.42986 9.40215 6.36754 8.46447C7.30522 7.52678 8.57699 7 9.90308 7Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
