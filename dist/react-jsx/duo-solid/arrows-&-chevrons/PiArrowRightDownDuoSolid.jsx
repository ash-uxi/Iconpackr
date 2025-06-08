import React from 'react';

/**
 * PiArrowRightDownDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightDownDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-down icon',
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
      <path d="M17.637 17.637 4.909 4.909" opacity=".28" /> <path fill={color || "currentColor"} d="M18.344 18.344c.306-.306.509-.713.559-1.166a31.2 31.2 0 0 0-.157-8.054 1 1 0 0 0-1.696-.56L8.564 17.05a1 1 0 0 0 .56 1.696c2.672.4 5.38.453 8.054.157a1.95 1.95 0 0 0 1.166-.559" />
    </svg>
  );
}
