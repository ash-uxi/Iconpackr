import React from 'react';

/**
 * PiChevronBigUpSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChevronBigUpSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chevron-big-up icon',
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
      <path d="M5.18967 14.414C4.96077 14.7306 4.93714 15.1514 5.12918 15.4916C5.32122 15.8318 5.69376 16.029 6.08305 15.9965C10.0209 15.6684 13.9791 15.6684 17.917 15.9965C18.3062 16.029 18.6788 15.8318 18.8708 15.4916C19.0629 15.1514 19.0392 14.7306 18.8103 14.414C17.1825 12.163 15.2764 10.1434 13.141 8.40697C12.4737 7.86434 11.5263 7.86434 10.859 8.40697C8.72356 10.1434 6.81746 12.163 5.18967 14.414Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
