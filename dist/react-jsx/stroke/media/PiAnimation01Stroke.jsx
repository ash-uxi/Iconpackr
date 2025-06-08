import React from 'react';

/**
 * PiAnimation01Stroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAnimation01Stroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'animation-01 icon',
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
      <path d="M15.6855 15.0174C14.9037 16.8306 13.1001 18.0999 11.0001 18.0999C10.9715 18.0999 10.943 18.0997 10.9146 18.0992M15.6855 15.0174C18.7559 14.6996 21.1501 12.1045 21.1501 8.9501C21.1501 5.58116 18.4191 2.8501 15.0501 2.8501C11.8959 2.8501 9.30076 5.2442 8.98285 8.31439M15.6855 15.0174C15.4767 15.039 15.2647 15.0501 15.0501 15.0501C11.6812 15.0501 8.95012 12.319 8.95012 8.9501C8.95012 8.73543 8.96121 8.52334 8.98285 8.31439M8.98285 8.31439C7.16948 9.09615 5.9001 10.8998 5.9001 12.9999C5.9001 13.0285 5.90033 13.057 5.9008 13.0855M5.9008 13.0855C4.14479 13.549 2.8501 15.1483 2.8501 17.05C2.8501 19.3143 4.68573 21.15 6.9501 21.15C8.85179 21.15 10.4511 19.8552 10.9146 18.0992M5.9008 13.0855C5.94601 15.8342 8.16585 18.054 10.9146 18.0992" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
