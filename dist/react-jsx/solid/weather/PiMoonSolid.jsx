import React from 'react';

/**
 * PiMoonSolid icon from the solid style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMoonSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'moon icon',
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
      <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12L21.9999 11.9622C21.9983 11.5177 21.7034 11.1276 21.2761 11.0048C20.8488 10.882 20.3918 11.0561 20.1544 11.432C19.1786 12.9773 17.4584 14.0001 15.5 14.0001C12.4624 14.0001 10 11.5377 10 8.50012C10 6.54168 11.0229 4.82143 12.5683 3.84561C12.9442 3.60826 13.1183 3.15125 12.9955 2.72397C12.8728 2.29668 12.4827 2.00174 12.0381 2.00007L12 2Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
