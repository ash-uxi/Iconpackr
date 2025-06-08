import React from 'react';

/**
 * PiFeatherPenSolid icon from the solid style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFeatherPenSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'feather-pen icon',
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
      <path d="M21.8418 2.96094L21.8496 3.27051C21.8807 5.68825 21.1818 8.81172 19.0146 11.0713C16.8439 11.6769 14.715 12 13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14C14.1224 14 15.3839 13.8762 16.709 13.6436C16.4447 14.8041 15.7612 15.9961 14.2598 16.8516C12.2916 17.9729 9.07444 18.4152 3.94434 17.7275C3.62158 19.2217 3.5 20.5429 3.5 21.5C3.5 22.0523 3.05228 22.5 2.5 22.5C1.94772 22.5 1.5 22.0523 1.5 21.5C1.5 20.1861 1.69271 18.3625 2.21289 16.3574L2.37207 15.7754C3.21589 12.8345 4.78834 9.51393 7.55371 6.8623C10.5258 4.01255 14.81 2 20.8428 2H21.8037L21.8418 2.96094Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
