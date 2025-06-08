import React from 'react';

/**
 * PiGridTableDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGridTableDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'grid-table icon',
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
      <g opacity="0.28"><path d="M10 22H14.6428C15.7266 22 16.6008 22 17.3086 21.9422C18.0375 21.8826 18.6777 21.7568 19.27 21.455C20.2108 20.9757 20.9757 20.2108 21.455 19.27C21.7568 18.6777 21.8826 18.0375 21.9422 17.3086C21.9736 16.9239 21.988 16.49 21.9945 16L10 16V22Z" fill={color || "currentColor"} /><path d="M22 14V10L10 10L10 14L22 14Z" fill={color || "currentColor"} /><path d="M21.9945 8C21.988 7.51003 21.9736 7.07614 21.9422 6.69138C21.8826 5.96253 21.7568 5.32234 21.455 4.73005C20.9757 3.78924 20.2108 3.02434 19.27 2.54497C18.6777 2.24318 18.0375 2.11737 17.3086 2.05782C16.6008 1.99998 15.7266 1.99999 14.6428 2H10V8L21.9945 8Z" fill={color || "currentColor"} /></g> <path d="M2 9.99988V13.9999L8 13.9999V9.99988L2 9.99988Z" fill={color || "currentColor"} /> <path d="M2.00549 15.9999C2.01203 16.4899 2.02638 16.9237 2.05782 17.3085C2.11737 18.0374 2.24318 18.6775 2.54497 19.2698C3.02433 20.2106 3.78924 20.9755 4.73005 21.4549C5.32234 21.7567 5.96253 21.8825 6.69138 21.9421C7.07614 21.9735 7.51003 21.9878 8 21.9944L8 15.9999L2.00549 15.9999Z" fill={color || "currentColor"} /> <path d="M8 2.00537C7.51003 2.01192 7.07614 2.02626 6.69138 2.0577C5.96253 2.11725 5.32234 2.24306 4.73005 2.54485C3.78924 3.02422 3.02434 3.78912 2.54497 4.72993C2.24318 5.32222 2.11737 5.96241 2.05782 6.69126C2.02638 7.07602 2.01204 7.50991 2.00549 7.99988L8 7.99988V2.00537Z" fill={color || "currentColor"} />
    </svg>
  );
}
