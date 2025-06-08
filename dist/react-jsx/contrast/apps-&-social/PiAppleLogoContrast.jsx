import React from 'react';

/**
 * PiAppleLogoContrast icon from the contrast style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAppleLogoContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'apple-logo icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M19.161 10.199a4.34 4.34 0 0 0-3.433-1.78c-1.472-.187-2.845.843-3.63.843s-1.864-.842-3.139-.749c-2.256 0-4.807 1.78-4.807 5.338 0 3.84 3.14 8.241 5.101 8.147 1.276 0 1.57-.749 3.041-.749 1.472 0 1.766.75 3.14.75 1.863 0 3.727-2.997 4.414-4.683-3.14-1.592-3.532-5.338-.687-7.117M16.755 2c-3.638 0-4.684 2.093-4.657 4.176 3.112.01 4.681-2.083 4.657-4.176"/>
  </g>
  <path d="M16.755 2c-3.638 0-4.684 2.093-4.657 4.176 3.112.01 4.681-2.083 4.657-4.176M19.161 10.199a4.34 4.34 0 0 0-3.433-1.78c-1.472-.187-2.845.844-3.63.844s-1.864-.843-3.139-.75c-2.256 0-4.807 1.78-4.807 5.338 0 3.84 3.14 8.241 5.101 8.148 1.276 0 1.57-.75 3.041-.75 1.472 0 1.766.75 3.14.75 1.863 0 3.727-2.997 4.414-4.683-3.14-1.592-3.532-5.338-.687-7.117"/>
    </svg>
  );
}
