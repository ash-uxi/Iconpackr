import React from 'react';

/**
 * PiPlayCircleDuoStroke icon from the duo-stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPlayCircleDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'play-circle icon',
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
      <path d="M12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.5 11.896C9.5 10.4641 9.5 9.74818 9.79923 9.34849C10.06 9.00019 10.4591 8.78227 10.8931 8.75127C11.3912 8.7157 11.9934 9.10284 13.1978 9.87713L13.3596 9.98113C14.4048 10.653 14.9273 10.989 15.1078 11.4161C15.2655 11.7894 15.2655 12.2105 15.1078 12.5838C14.9273 13.011 14.4048 13.3469 13.3596 14.0188L13.1978 14.1228C11.9934 14.8971 11.3912 15.2842 10.8931 15.2487C10.4591 15.2177 10.06 14.9997 9.79923 14.6514C9.5 14.2517 9.5 13.5358 9.5 12.104V11.896Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
