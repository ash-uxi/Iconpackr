import React from 'react';

/**
 * PiResolutionQualityHdDuoSolid icon from the duo-solid style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiResolutionQualityHdDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'resolution-quality-hd icon',
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
      <path d="M6.754 8.75v3.5m0 0h3.5m-3.5 0v3m3.5-3v-3.5m0 3.5v3m3.5-6.5h.3c1.12 0 1.68 0 2.108.218a2 2 0 0 1 .874.874c.218.428.218.988.218 2.108v.1c0 1.12 0 1.68-.218 2.108a2 2 0 0 1-.874.874c-.428.218-.988.218-2.108.218h-.3z" /> <path fill={color || "currentColor"} d="M9.357 3C8.273 3 7.4 3 6.691 3.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 2.544 5.73c-.302.592-.428 1.233-.487 1.961C2 8.4 2 9.273 2 10.357v3.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C7.4 21 8.273 21 9.357 21h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C22 15.6 22 14.727 22 13.643v-3.286c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.96a5 5 0 0 0-2.185-2.186c-.592-.302-1.232-.428-1.961-.487C16.6 3 15.727 3 14.643 3z" opacity=".28" />
    </svg>
  );
}
