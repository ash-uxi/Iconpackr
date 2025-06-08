import React from 'react';

/**
 * PiEggBoiledContrast icon from the contrast style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEggBoiledContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'egg-boiled icon',
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
      <path d="M15.5 14a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
  <path d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611"/>
  <path fill="currentColor" fillRule="evenodd" d="M19.39 14.111a7.389 7.389 0 1 1-14.779 0c0-4.08 3.308-11.611 7.39-11.611 4.08 0 7.388 7.53 7.388 11.611M12 9.5a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9" clipRule="evenodd" opacity=".28"/>
    </svg>
  );
}
