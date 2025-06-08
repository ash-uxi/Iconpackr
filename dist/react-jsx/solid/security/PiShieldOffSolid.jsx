import React from 'react';

/**
 * PiShieldOffSolid icon from the solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShieldOffSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'shield-off icon',
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
      <path d="M21.525 9.05915C21.4951 8.66977 21.2412 8.33345 20.8749 8.19796C20.5086 8.06247 20.097 8.15259 19.8209 8.42874L8.49575 19.7539C8.27525 19.9744 8.17023 20.2851 8.21177 20.5942C8.25331 20.9032 8.43664 21.1752 8.70754 21.3297L9.95824 22.0428C11.1593 22.7276 12.6289 22.7436 13.8446 22.0851L15.3333 21.2788C19.4977 19.0231 21.9458 14.529 21.5825 9.8069L21.525 9.05915Z" fill="currentColor" stroke="none"/>
  <path d="M22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L19.051 3.53474C18.9453 3.48571 18.8369 3.44103 18.7259 3.40097L13.2607 1.42742C12.3827 1.11037 11.4215 1.11037 10.5436 1.42742L5.15597 3.37294C3.62372 3.92625 2.58011 5.35353 2.5175 6.98142L2.39025 10.29C2.28388 13.0556 3.13479 15.7156 4.71872 17.8671L1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
