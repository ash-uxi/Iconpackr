import React from 'react';

/**
 * PiFlagDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFlagDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'flag icon',
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
      <path fill={color || "currentColor"} d="M12.526 3.052a7.03 7.03 0 0 0-5.777-.738l-1.446.448A1.85 1.85 0 0 0 4 4.529v8.927c0 .216.04.471.18.716.145.259.361.437.596.541.409.183.823.121 1.03.08.344-.069.657-.21.983-.328h.002a5.6 5.6 0 0 1 4.562.442 7.6 7.6 0 0 0 6.01.66l1.309-.405A1.89 1.89 0 0 0 20 13.36V4.485c0-.267-.064-.577-.27-.854a1.35 1.35 0 0 0-.723-.492c-.423-.12-.857-.04-1.117.02-.298.07-.591.176-.811.26-.14.053-.278.114-.42.161a5.03 5.03 0 0 1-4.133-.528" opacity=".28" /> <path d="M5 3v18" />
    </svg>
  );
}
