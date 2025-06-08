import React from 'react';

/**
 * PiHeartBreakDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHeartBreakDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'heart-break icon',
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
      <path d="M13 16c-1.155-1.06-1.74-2.436-1.992-3.952a.07.07 0 0 1 .032-.075l2.896-1.93a.12.12 0 0 0 .05-.118A11.5 11.5 0 0 0 12 5.427a6 6 0 0 0-1-1.164" /> <path fill={color || "currentColor"} d="M5.458 2.42c2.154-.815 4.689-.49 6.542 1.416 1.852-1.903 4.386-2.225 6.54-1.412A6.92 6.92 0 0 1 23 8.944c0 3.944-2.508 7.208-4.956 9.41a22.7 22.7 0 0 1-3.552 2.613c-.517.305-.986.548-1.37.718a6 6 0 0 1-.541.21c-.14.044-.357.105-.581.105s-.44-.06-.58-.105a6 6 0 0 1-.541-.21c-.385-.17-.854-.413-1.372-.718a22.7 22.7 0 0 1-3.55-2.614C3.508 16.153 1 12.888 1 8.944A6.925 6.925 0 0 1 5.458 2.42" opacity=".28" />
    </svg>
  );
}
