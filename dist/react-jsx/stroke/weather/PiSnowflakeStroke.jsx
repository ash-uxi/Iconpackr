import React from 'react';

/**
 * PiSnowflakeStroke icon from the stroke style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSnowflakeStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'snowflake icon',
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
      <path d="M9.00028 3L12.0003 6M12.0003 6L15.0003 3M12.0003 6V12M15.0003 21L12.0003 18M12.0003 18L9.00028 21M12.0003 18V12M12.0003 12L17.1964 9M12.0003 12L6.80413 15M12.0003 12L6.80413 9.00005M12.0003 12L17.1964 15.0001M18.2945 4.90192L17.1964 9M17.1964 9L21.2945 10.0981M5.70605 19.0981L6.80413 15M6.80413 15L2.70605 13.9019M2.70605 10.0981L6.80413 9.00005M6.80413 9.00005L5.70605 4.90198M21.2945 13.902L17.1964 15.0001M17.1964 15.0001L18.2945 19.0981" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
