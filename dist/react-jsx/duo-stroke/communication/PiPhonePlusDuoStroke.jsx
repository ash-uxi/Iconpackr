import React from 'react';

/**
 * PiPhonePlusDuoStroke icon from the duo-stroke style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhonePlusDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'phone-plus icon',
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
      <path d="M14.0002 7H17.0002M17.0002 7H20.0002M17.0002 7V4M17.0002 7L17.0002 10M3.03518 5.70916C3.35649 8.43264 4.17013 10.8771 5.40756 12.974C6.0608 12.4721 6.76171 12.0002 7.36657 11.4397C8.82827 10.0852 9.43075 8.03869 8.93619 6.10803C8.56683 4.6661 7.87105 3.18051 6.18792 3.0287C5.78456 2.99232 5.29419 2.98252 4.89757 3.04738C3.63544 3.25377 2.89408 4.51323 3.03518 5.70916ZM10.7149 18.4047C12.8789 19.7478 15.4296 20.6276 18.2876 20.965C19.4837 21.1062 20.7426 20.3643 20.9489 19.1022C21.0197 18.6693 21.0113 18.1714 20.9597 17.7362C20.7502 15.9658 19.0457 15.2967 17.5247 14.9479C15.7915 14.5505 13.9736 15.0271 12.6581 16.2238C11.9441 16.8733 11.3468 17.6768 10.7149 18.4047Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.40723 12.9741C6.72398 15.2054 8.52059 17.0432 10.7145 18.4048" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
