import React from 'react';

/**
 * PiFaceAnnoyedBoredDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiFaceAnnoyedBoredDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'face-annoyed-bored icon',
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
      <path d="M12.0001 1.84961C6.39441 1.84961 1.8501 6.39392 1.8501 11.9996C1.8501 17.6053 6.39441 22.1496 12.0001 22.1496C17.6058 22.1496 22.1501 17.6053 22.1501 11.9996C22.1501 6.39392 17.6058 1.84961 12.0001 1.84961Z" fill={color || "currentColor"} opacity="0.3" /> <path d="M7 10C7 9.44772 7.44772 9 8 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H8C7.44772 11 7 10.5523 7 10ZM13 10C13 9.44772 13.4477 9 14 9H16C16.5523 9 17 9.44772 17 10C17 10.5523 16.5523 11 16 11H14C13.4477 11 13 10.5523 13 10ZM7 15C7 14.4477 7.44772 14 8 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H8C7.44772 16 7 15.5523 7 15Z" fill={color || "currentColor"} fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
