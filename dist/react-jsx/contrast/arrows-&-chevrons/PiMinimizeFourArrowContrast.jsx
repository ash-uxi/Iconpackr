import React from 'react';

/**
 * PiMinimizeFourArrowContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMinimizeFourArrowContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'minimize-four-arrow icon',
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
    <path d="M8.753 9.256A18.5 18.5 0 0 1 4 9.076l1.23-1.04a24 24 0 0 0 2.806-2.807L9.076 4c.266 1.58.326 3.179.18 4.753a.555.555 0 0 1-.503.503M20.003 9.077a18.5 18.5 0 0 1-4.753.179.555.555 0 0 1-.503-.503A18.5 18.5 0 0 1 14.927 4l1.04 1.23a24 24 0 0 0 2.807 2.806zM8.756 14.744a18.5 18.5 0 0 0-4.753.179l1.23 1.04a24 24 0 0 1 2.806 2.808L9.08 20c.265-1.581.325-3.179.18-4.753a.555.555 0 0 0-.504-.503M15.247 14.744a18.5 18.5 0 0 1 4.753.179l-1.23 1.04a24 24 0 0 0-2.806 2.808L14.924 20a18.5 18.5 0 0 1-.18-4.753.555.555 0 0 1 .503-.503"/>
  </g>
  <path d="M15.247 14.744a18.5 18.5 0 0 1 4.753.179l-1.23 1.04a24 24 0 0 0-2.806 2.808L14.924 20a18.5 18.5 0 0 1-.18-4.753.555.555 0 0 1 .503-.503M15.25 9.256c1.575.146 3.172.086 4.753-.18l-1.229-1.04a24 24 0 0 1-2.807-2.807L14.927 4a18.5 18.5 0 0 0-.18 4.753.555.555 0 0 0 .503.503M8.753 9.256A18.5 18.5 0 0 1 4 9.076l1.23-1.04a24 24 0 0 0 2.806-2.807L9.076 4c.266 1.58.326 3.179.18 4.753a.555.555 0 0 1-.503.503M8.756 14.744a18.5 18.5 0 0 0-4.753.179l1.23 1.04a24 24 0 0 1 2.806 2.808L9.08 20c.265-1.581.325-3.179.18-4.753a.555.555 0 0 0-.504-.503"/>
    </svg>
  );
}
