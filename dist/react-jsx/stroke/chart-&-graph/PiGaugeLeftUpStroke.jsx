import React from 'react';

/**
 * PiGaugeLeftUpStroke icon from the stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGaugeLeftUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gauge-left-up icon',
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
      <path d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M8.46509 8.46387L12.5721 11.2679C13.0511 11.5944 13.1171 12.298 12.7071 12.7079C12.297 13.1176 11.5932 13.0512 11.2671 12.5719L8.46509 8.46387Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
