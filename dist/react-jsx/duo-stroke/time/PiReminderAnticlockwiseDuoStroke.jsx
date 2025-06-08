import React from 'react';

/**
 * PiReminderAnticlockwiseDuoStroke icon from the duo-stroke style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiReminderAnticlockwiseDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'reminder-anticlockwise icon',
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
      <path d="M14 15L12.2929 13.2929C12.1054 13.1054 12 12.851 12 12.5858V9" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.0706 3.69336C4.7426 4.94748 4.57868 6.23831 4.58254 7.53355C4.58355 7.87179 4.86652 7.98116 5.14216 8.04217L5.14432 8.04264M8.80349 8.39076C7.57338 8.42519 6.34445 8.3081 5.14432 8.04264M5.14432 8.04264C6.34408 6.13914 8.33539 4.75021 10.7355 4.39267C15.1055 3.74166 19.1759 6.75654 19.8269 11.1266C20.4779 15.4966 17.463 19.567 13.093 20.218C8.8802 20.8456 4.9459 18.0664 4.08496 13.9505" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
