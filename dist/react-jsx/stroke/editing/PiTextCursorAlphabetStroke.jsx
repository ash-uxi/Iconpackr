import React from 'react';

/**
 * PiTextCursorAlphabetStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTextCursorAlphabetStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'text-cursor-alphabet icon',
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
      <path d="M14 22C14.93 22 15.395 22 15.7765 21.8978C16.8117 21.6204 17.6204 20.8117 17.8978 19.7765C18 19.395 18 18.93 18 18M18 18C18 18.93 18 19.395 18.1022 19.7765C18.3796 20.8117 19.1883 21.6204 20.2235 21.8978C20.605 22 21.07 22 22 22M18 18V12M14 2C14.93 2 15.395 2 15.7765 2.10222C16.8117 2.37962 17.6204 3.18827 17.8978 4.22354C18 4.60504 18 5.07003 18 6M18 6C18 5.07003 18 4.60504 18.1022 4.22354C18.3796 3.18827 19.1883 2.37962 20.2235 2.10222C20.605 2 21.07 2 22 2M18 6L18 12M18 12H20.0085M18 12H16M2 17.9997L5.63152 7.2974C5.83807 6.71906 6.38588 6.33301 7 6.33301C7.63123 6.33301 8.19027 6.74052 8.38343 7.34147L12 17.9997M3.69661 12.9997H10.3034" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
