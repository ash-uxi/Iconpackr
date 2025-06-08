import React from 'react';

/**
 * PiArrowRightUpDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowRightUpDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-right-up icon',
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
      <path d="M17.637 6.363 4.909 19.091" opacity=".28" /> <path fill={color || "currentColor"} d="M18.344 5.656c.306.306.509.713.559 1.166a31.2 31.2 0 0 1-.157 8.055 1 1 0 0 1-1.696.559L8.564 6.95a1 1 0 0 1 .56-1.696c2.672-.4 5.38-.452 8.054-.157.453.05.86.253 1.166.56" />
    </svg>
  );
}
