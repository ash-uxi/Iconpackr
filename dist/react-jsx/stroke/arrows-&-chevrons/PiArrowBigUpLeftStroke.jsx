import React from 'react';

/**
 * PiArrowBigUpLeftStroke icon from the stroke style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowBigUpLeftStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-big-up-left icon',
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
      <path d="M18.7635 16.784L16.7836 18.7639C16.3876 19.1599 16.1896 19.3579 15.9613 19.4321C15.7604 19.4974 15.5441 19.4974 15.3432 19.4321C15.1149 19.3579 14.9169 19.1599 14.5209 18.7639L7.50406 11.7471C6.60626 12.7382 5.74081 13.7594 4.90926 14.8091C4.45732 11.7906 4.39797 8.73302 4.73174 5.71268C4.76037 5.45358 4.87597 5.22276 5.04918 5.04954C5.22239 4.87633 5.45322 4.76073 5.71231 4.7321C8.73266 4.39834 11.7903 4.45769 14.8088 4.90963C13.7591 5.74118 12.7379 6.60663 11.7467 7.50443L18.7635 14.5213C19.1595 14.9173 19.3576 15.1153 19.4317 15.3436C19.497 15.5445 19.497 15.7608 19.4317 15.9616C19.3576 16.19 19.1595 16.388 18.7635 16.784Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
