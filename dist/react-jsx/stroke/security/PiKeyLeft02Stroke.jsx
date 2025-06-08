import React from 'react';

/**
 * PiKeyLeft02Stroke icon from the stroke style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyLeft02Stroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-left-02 icon',
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
      <path d="M18.501 13V11C18.6562 11.1164 18.7822 11.2674 18.869 11.441C18.9558 11.6146 19.001 11.8059 19.001 12C19.001 12.1941 18.9558 12.3854 18.869 12.559C18.7822 12.7326 18.6562 12.8836 18.501 13Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M4.00098 10L2.00098 12L4.00098 14H7.00098L8.14698 12.854C8.19342 12.8074 8.2486 12.7705 8.30934 12.7453C8.37009 12.7201 8.43521 12.7071 8.50098 12.7071C8.56674 12.7071 8.63186 12.7201 8.69261 12.7453C8.75335 12.7705 8.80853 12.8074 8.85498 12.854L10.001 14H13.469C13.92 14.9092 14.6652 15.6391 15.5834 16.0714C16.5017 16.5037 17.5391 16.6129 18.5272 16.3812C19.5153 16.1496 20.3961 15.5907 21.0266 14.7954C21.657 14 22.0001 13.0149 22.0001 12C22.0001 10.9851 21.657 9.99999 21.0266 9.20465C20.3961 8.40931 19.5153 7.85044 18.5272 7.61879C17.5391 7.38714 16.5017 7.49632 15.5834 7.92859C14.6652 8.36086 13.92 9.09084 13.469 10H4.00098Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
