import React from 'react';

/**
 * PiRepeatSquareDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRepeatSquareDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'repeat-square icon',
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
      <path d="M12 2C13.0964 2.79655 14.0785 3.73031 14.9207 4.77659C14.974 4.84283 15.0004 4.92241 15 5.00189C14.9996 5.0801 14.9731 5.15821 14.9207 5.22341C14.0785 6.26969 13.0964 7.20345 12 8M12 16C10.9036 16.7965 9.92154 17.7303 9.07935 18.7766C9.02687 18.8418 9.00042 18.9199 9.00001 18.9981C8.99958 19.0776 9.02603 19.1572 9.07935 19.2234C9.92154 20.2697 10.9036 21.2035 12 22" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M15 5.00189C14.6991 5 14.3677 5 14 5H10C8.13872 5 7.20808 5 6.45492 5.24472C4.93273 5.73931 3.73931 6.93273 3.24472 8.45492C3 9.20808 3 10.1387 3 12C3 13.8613 3 14.7919 3.24472 15.5451C3.56708 16.5372 4.18631 17.3897 4.99995 18M9 18.9981C9.30073 19 9.6325 19 10 19H14C15.8613 19 16.7919 19 17.5451 18.7553C19.0673 18.2607 20.2607 17.0673 20.7553 15.5451C21 14.7919 21 13.8613 21 12C21 10.1387 21 9.20808 20.7553 8.45492C20.4329 7.46279 19.8137 6.61033 19.0001 6" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
