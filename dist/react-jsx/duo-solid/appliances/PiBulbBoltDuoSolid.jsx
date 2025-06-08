import React from 'react';

/**
 * PiBulbBoltDuoSolid icon from the duo-solid style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBulbBoltDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bulb-bolt icon',
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
      <path d="M10 22h4M12.385 6.7l-1.836 2.7c-.121.162-.006.373.224.41l2.454.398c.228.037.344.245.226.409l-2.086 2.682" /> <path fill={color || "currentColor"} d="M12 2C7.618 2 4 5.428 4 9.737c0 2.357 1.09 4.46 2.79 5.872.548.454.914.936 1.046 1.442l.28 1.078A2.5 2.5 0 0 0 10.535 20h2.929a2.5 2.5 0 0 0 2.42-1.871l.28-1.078c.13-.506.497-.988 1.044-1.442C18.91 14.197 20 12.094 20 9.737 20 5.428 16.382 2 12 2" opacity=".28" />
    </svg>
  );
}
