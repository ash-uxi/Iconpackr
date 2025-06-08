import React from 'react';

/**
 * PiBulbOnDuoStroke icon from the duo-stroke style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBulbOnDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'bulb-on icon',
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
      <path d="M10.3789 21H13.621M12 2V1M19 4.70711L19.7071 4M4.70711 4.70711L4 4M22 11H21M3 11H2" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M12.0002 4.99426C8.85912 4.99426 6.31274 7.44491 6.31274 10.4679C6.31274 12.125 7.07787 13.6101 8.28666 14.6139C8.79725 15.0379 9.23621 15.5643 9.40307 16.2066L9.63044 17.0819C9.77 17.6192 10.255 17.9943 10.81 17.9943H13.1904C13.7455 17.9943 14.2305 17.6192 14.37 17.0819L14.5974 16.2066C14.7643 15.5643 15.2032 15.0379 15.7138 14.6139C16.9226 13.6101 17.6877 12.125 17.6877 10.4679C17.6877 7.44491 15.1414 4.99426 12.0002 4.99426Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
