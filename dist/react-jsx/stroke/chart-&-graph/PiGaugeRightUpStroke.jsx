import React from 'react';

/**
 * PiGaugeRightUpStroke icon from the stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGaugeRightUpStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gauge-right-up icon',
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
      <path d="M12.0001 2.8499C17.0535 2.8499 21.1501 6.9465 21.1501 11.9999C21.1501 17.0533 17.0535 21.1499 12.0001 21.1499C6.94669 21.1499 2.8501 17.0533 2.8501 11.9999C2.8501 6.9465 6.94669 2.8499 12.0001 2.8499Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M15.5353 8.46375L11.4273 11.2669C10.9413 11.5985 10.8766 12.2903 11.2926 12.7064C11.7087 13.1224 12.4005 13.0577 12.7322 12.5717L15.5353 8.46375Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
