import React from 'react';

/**
 * PiArrowTurnDownLeftDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowTurnDownLeftDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-turn-down-left icon',
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
      <path d="M8.351 15H12c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C20 11.2 20 9.8 20 7V4" opacity=".28" /> <path fill={color || "currentColor"} d="M9.844 10.17a1 1 0 0 0-1.58-.974 26.2 26.2 0 0 0-4.87 4.684 1.79 1.79 0 0 0 0 2.24 26.2 26.2 0 0 0 4.87 4.684 1 1 0 0 0 1.58-.973A49 49 0 0 1 9.548 18a23 23 0 0 1 0-6c.058-.443.134-.889.296-1.83" />
    </svg>
  );
}
