import React from 'react';

/**
 * PiProjectorDuoStroke icon from the duo-stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiProjectorDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'projector icon',
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
      <path d="M19.01 12H19M16 12C16 10.8053 15.4762 9.73294 14.6458 9C13.9407 8.37764 13.0144 8 12 8C10.9856 8 10.0593 8.37764 9.35418 9C8.52376 9.73294 8 10.8053 8 12C8 13.1947 8.52375 14.2671 9.35418 15C10.0593 15.6224 10.9856 16 12 16C13.0144 16 13.9407 15.6224 14.6458 15C15.4762 14.2671 16 13.1947 16 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5 15C4.06812 15 3.60217 15 3.23463 14.8478C2.74458 14.6448 2.35523 14.2554 2.15224 13.7654C2 13.3978 2 12.9319 2 12C2 11.0681 2 10.6022 2.15224 10.2346C2.35523 9.74458 2.74458 9.35523 3.23463 9.15224C3.60218 9 4.06812 9 5 9H9.35418C8.52376 9.73294 8 10.8053 8 12C8 13.1947 8.52375 14.2671 9.35418 15H5ZM5 15L5 16M19 15C19.9319 15 20.3978 15 20.7654 14.8478C21.2554 14.6448 21.6448 14.2554 21.8478 13.7654C22 13.3978 22 12.9319 22 12C22 11.0681 22 10.6022 21.8478 10.2346C21.6448 9.74458 21.2554 9.35523 20.7654 9.15224C20.3978 9 19.9319 9 19 9H14.6458C15.4762 9.73294 16 10.8053 16 12C16 13.1947 15.4762 14.2671 14.6458 15L19 15ZM19 15V16" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
