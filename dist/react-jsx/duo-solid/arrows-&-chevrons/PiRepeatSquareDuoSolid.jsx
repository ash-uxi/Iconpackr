import React from 'react';

/**
 * PiRepeatSquareDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRepeatSquareDuoSolid({ 
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
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} fillRule="evenodd" d="M11.502 1.133a1 1 0 0 1 1.086.058A16.3 16.3 0 0 1 15.7 4.15a1.355 1.355 0 0 1 0 1.7 16.3 16.3 0 0 1-3.112 2.959 1 1 0 0 1-1.583-.908l.061-.612a23 23 0 0 0 0-4.578l-.061-.611a1 1 0 0 1 .497-.967m.996 14a1 1 0 0 1 .497.966l-.061.612a23 23 0 0 0 0 4.578l.061.611a1 1 0 0 1-1.583.909A16.3 16.3 0 0 1 8.3 19.85a1.355 1.355 0 0 1 0-1.7 16.3 16.3 0 0 1 3.112-2.959 1 1 0 0 1 1.086-.058" clipRule="evenodd" /> <path d="M12.18 5H10c-1.861 0-2.792 0-3.545.245a5 5 0 0 0-3.21 3.21C3 9.208 3 10.139 3 12s0 2.792.245 3.545A5 5 0 0 0 5 18m6.82 1H14c1.861 0 2.792 0 3.545-.245a5 5 0 0 0 3.21-3.21C21 14.792 21 13.861 21 12s0-2.792-.245-3.545A5 5 0 0 0 19 6" opacity=".28" />
    </svg>
  );
}
