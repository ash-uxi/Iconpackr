import React from 'react';

/**
 * PiTrendlineDownDuoSolid icon from the duo-solid style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTrendlineDownDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'trendline-down icon',
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
      <path d="m2 7.148.73.937a21.8 21.8 0 0 0 6.61 5.664c.316.176.715.08.916-.222l3.212-4.818a.64.64 0 0 1 .926-.15 20 20 0 0 1 4.848 5.45" opacity=".28" /> <path fill={color || "currentColor"} fillRule="evenodd" d="M22.512 11.316a1 1 0 0 1 .479.978 18.3 18.3 0 0 1-1.188 4.632 1.476 1.476 0 0 1-1.578.911 18.3 18.3 0 0 1-4.606-1.287 1 1 0 0 1-.03-1.826l1.274-.595a22.7 22.7 0 0 0 3.41-1.968l1.152-.806a1 1 0 0 1 1.087-.039" clipRule="evenodd" />
    </svg>
  );
}
