import React from 'react';

/**
 * PiEraserLineDuoSolid icon from the duo-solid style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEraserLineDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'eraser-line icon',
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
      <path d="M15.5686 2.70594C14.7235 2.43135 13.8132 2.43135 12.9681 2.70594C12.4264 2.88196 11.9692 3.19176 11.5128 3.57923C11.0724 3.95312 10.5718 4.45369 9.96172 5.0638L7.41496 7.61056C7.02444 8.00108 7.02444 8.63425 7.41497 9.02477L14.9755 16.5852C15.366 16.9758 15.9992 16.9758 16.3897 16.5852L18.9364 14.0386C19.5465 13.4284 20.0471 12.9279 20.421 12.4874C20.8085 12.031 21.1183 11.5738 21.2943 11.0321C21.5689 10.187 21.5689 9.27669 21.2943 8.43161C21.1183 7.88986 20.8085 7.43267 20.421 6.97625C20.0471 6.53584 19.5466 6.03529 18.9365 5.42522L18.575 5.0638C17.965 4.45369 17.4644 3.95312 17.024 3.57923C16.5676 3.19176 16.1104 2.88196 15.5686 2.70594Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M5.09328 9.93202C5.20381 9.82149 5.383 9.82149 5.49353 9.93201L13.5616 18H20.9999C21.5522 18 21.9999 18.4477 21.9999 19C21.9999 19.5523 21.5522 20 20.9999 20H6.90981C6.64944 20 6.39933 19.8985 6.21266 19.7169C5.96786 19.4789 5.69798 19.209 5.39929 18.9103L5.0638 18.5748C4.45369 17.9647 3.95312 17.4642 3.57923 17.0238C3.19176 16.5673 2.88196 16.1101 2.70594 15.5684C2.43135 14.7233 2.43135 13.813 2.70594 12.9679C2.88196 12.4262 3.19176 11.969 3.57923 11.5126C3.95312 11.0721 4.4537 10.5716 5.0638 9.96149L5.09328 9.93202Z" fill={color || "currentColor"} />
    </svg>
  );
}
