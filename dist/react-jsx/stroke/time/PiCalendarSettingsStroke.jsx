import React from 'react';

/**
 * PiCalendarSettingsStroke icon from the stroke style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCalendarSettingsStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'calendar-settings icon',
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
      <path d="M18 18H18.01M20.9597 10C20.9095 9.01824 20.7967 8.31564 20.5433 7.7039C19.9343 6.23373 18.7663 5.06569 17.2961 4.45672C16.9146 4.29871 16.4978 4.19536 16 4.12777M20.9597 10L3.0403 10M20.9597 10C20.9777 10.352 20.9877 10.7398 20.9932 11.1722M3.0403 10C3 10.7878 3 11.7554 3 13C3 15.7956 3 17.1935 3.45672 18.2961C4.06569 19.7663 5.23373 20.9343 6.7039 21.5433C7.71667 21.9628 8.97848 21.9971 11.3438 21.9999M3.0403 10C3.09052 9.01824 3.20333 8.31564 3.45672 7.7039C4.06569 6.23373 5.23373 5.06569 6.7039 4.45672C7.08538 4.29871 7.50219 4.19536 8 4.12777M8 2V4.12777M8 4.12777V6M8 4.12777C8.94106 4 10.1716 4 12 4C13.8284 4 15.0589 4 16 4.12777M16 2V4.12777M16 4.12777V6M18 14L19.1787 15.1545L20.8284 15.1716L20.8455 16.8213L22 18L20.8455 19.1787L20.8284 20.8284L19.1787 20.8455L18 22L16.8213 20.8455L15.1716 20.8284L15.1545 19.1787L14 18L15.1545 16.8213L15.1716 15.1716L16.8213 15.1545L18 14Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
