import React from 'react';

/**
 * PiSwipeDefaultContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSwipeDefaultContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'swipe-default icon',
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
      <path d="M15 4.371a16.4 16.4 0 0 1 6 2.636m-19 0a16.5 16.5 0 0 1 3-1.678m1.731 13.939L2.488 12.74a.79.79 0 0 1 .31-1.138 3.16 3.16 0 0 1 3.814.77l1.394 1.626v-10a2 2 0 1 1 4 0v6l4.808.801c3.525.588 3.674 4.58 2.652 7.306-1.8 4.8-9.979 5.403-12.735 1.163"/>
  <path fill="currentColor" d="M6.731 19.268 2.488 12.74a.79.79 0 0 1 .31-1.138 3.16 3.16 0 0 1 3.815.77l1.393 1.626v-10a2 2 0 0 1 4 0v6l4.808.801c3.526.588 3.674 4.58 2.652 7.306-1.8 4.8-9.979 5.403-12.735 1.163" opacity=".28"/>
    </svg>
  );
}
