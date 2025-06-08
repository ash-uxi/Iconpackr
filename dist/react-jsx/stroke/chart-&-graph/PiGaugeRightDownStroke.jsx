import React from 'react';

/**
 * PiGaugeRightDownStroke icon from the stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGaugeRightDownStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gauge-right-down icon',
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
  <path d="M15.5353 15.5362L11.4273 12.7331C10.9413 12.4015 10.8766 11.7097 11.2926 11.2936C11.7087 10.8776 12.4005 10.9423 12.7322 11.4283L15.5353 15.5362Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
