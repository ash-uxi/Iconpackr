import React from 'react';

/**
 * PiStopSquareStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiStopSquareStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'stop-square icon',
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
      <path d="M3 12C3 9.20435 3 7.80653 3.45672 6.7039C4.06569 5.23373 5.23373 4.06569 6.7039 3.45672C7.80653 3 9.20435 3 12 3C14.7956 3 16.1935 3 17.2961 3.45672C18.7663 4.06569 19.9343 5.23373 20.5433 6.7039C21 7.80653 21 9.20435 21 12C21 14.7956 21 16.1935 20.5433 17.2961C19.9343 18.7663 18.7663 19.9343 17.2961 20.5433C16.1935 21 14.7956 21 12 21C9.20435 21 7.80653 21 6.7039 20.5433C5.23373 19.9343 4.06569 18.7663 3.45672 17.2961C3 16.1935 3 14.7956 3 12Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M9 10.6C9 10.0399 9 9.75992 9.10899 9.54601C9.20487 9.35785 9.35785 9.20487 9.54601 9.10899C9.75992 9 10.0399 9 10.6 9H13.4C13.9601 9 14.2401 9 14.454 9.10899C14.6422 9.20487 14.7951 9.35785 14.891 9.54601C15 9.75992 15 10.0399 15 10.6V13.4C15 13.9601 15 14.2401 14.891 14.454C14.7951 14.6422 14.6422 14.7951 14.454 14.891C14.2401 15 13.9601 15 13.4 15H10.6C10.0399 15 9.75992 15 9.54601 14.891C9.35785 14.7951 9.20487 14.6422 9.10899 14.454C9 14.2401 9 13.9601 9 13.4V10.6Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
