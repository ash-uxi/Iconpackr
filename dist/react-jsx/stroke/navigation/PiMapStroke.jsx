import React from 'react';

/**
 * PiMapStroke icon from the stroke style in navigation category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMapStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'map icon',
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
      <path d="M9 4.23608V17.2361M15 6.76396V19.764M10.4311 4.71557L13.5836 6.29183C14.0939 6.54699 14.3491 6.67457 14.6163 6.7268C14.8697 6.77635 15.1303 6.77635 15.3837 6.7268C15.6509 6.67457 15.9061 6.54699 16.4164 6.29183C17.9073 5.5464 18.6527 5.17368 19.2593 5.25297C19.8278 5.3273 20.3371 5.64206 20.6578 6.11733C21 6.62439 21 7.45781 21 9.12465V15.0223C21 15.7402 21 16.0992 20.8907 16.4161C20.794 16.6964 20.6363 16.9516 20.4288 17.1634C20.1943 17.4029 19.8732 17.5634 19.2311 17.8845L16.4311 19.2845C15.9064 19.5469 15.644 19.678 15.3688 19.7297C15.1251 19.7754 14.8749 19.7754 14.6312 19.7297C14.356 19.678 14.0936 19.5469 13.5689 19.2845L10.4164 17.7082C9.90609 17.4531 9.65092 17.3255 9.38374 17.2733C9.13031 17.2237 8.86969 17.2237 8.61626 17.2733C8.34908 17.3255 8.09391 17.4531 7.58359 17.7082C6.09273 18.4537 5.34729 18.8264 4.74074 18.7471C4.17221 18.6728 3.66292 18.358 3.34218 17.8827C3 17.3757 3 16.5423 3 14.8754V8.97774C3 8.25983 3 7.90087 3.10931 7.58396C3.20597 7.30371 3.36373 7.04845 3.57116 6.83666C3.80573 6.59717 4.12679 6.43664 4.76892 6.11557L7.56892 4.71557C8.09365 4.45321 8.35601 4.32203 8.6312 4.2704C8.87494 4.22467 9.12506 4.22467 9.3688 4.2704C9.64399 4.32203 9.90635 4.45321 10.4311 4.71557Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
