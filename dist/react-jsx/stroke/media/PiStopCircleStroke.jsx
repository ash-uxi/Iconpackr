import React from 'react';

/**
 * PiStopCircleStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStopCircleStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'stop-circle icon',
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
  <path d="M9.00012 10.6C9.00012 10.0399 9.00012 9.75992 9.10912 9.54601C9.20499 9.35785 9.35797 9.20487 9.54613 9.10899C9.76004 9 10.0401 9 10.6001 9H13.4001C13.9602 9 14.2402 9 14.4541 9.10899C14.6423 9.20487 14.7953 9.35785 14.8911 9.54601C15.0001 9.75992 15.0001 10.0399 15.0001 10.6V13.4C15.0001 13.9601 15.0001 14.2401 14.8911 14.454C14.7953 14.6422 14.6423 14.7951 14.4541 14.891C14.2402 15 13.9602 15 13.4001 15H10.6001C10.0401 15 9.76004 15 9.54613 14.891C9.35797 14.7951 9.20499 14.6422 9.10912 14.454C9.00012 14.2401 9.00012 13.9601 9.00012 13.4V10.6Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
