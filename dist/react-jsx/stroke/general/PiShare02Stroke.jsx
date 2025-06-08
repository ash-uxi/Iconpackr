import React from 'react';

/**
 * PiShare02Stroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShare02Stroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'share-02 icon',
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
      <path d="M21 13V14.6C21 16.84 21 17.96 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C17.96 21 16.84 21 14.6 21H9.4C7.16 21 6.04 21 5.184 20.564C4.43139 20.1805 3.81949 19.5686 3.436 18.816C3 17.96 3 16.84 3 14.6V13M8 6.856C8.98262 5.50734 10.1276 4.28481 11.409 3.216C11.5745 3.07685 11.7838 3.00038 12 3M12 3C12.2162 3.00038 12.4255 3.07685 12.591 3.216C13.8724 4.28482 15.0174 5.50735 16 6.856M12 3V16" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
