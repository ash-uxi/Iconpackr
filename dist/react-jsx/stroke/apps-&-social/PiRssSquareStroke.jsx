import React from 'react';

/**
 * PiRssSquareStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiRssSquareStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'rss-square icon',
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
      <path d="M7 7C9.65216 7 12.1957 8.05357 14.0711 9.92893C15.9464 11.8043 17 14.3478 17 17M7 11.7368C7.69117 11.7368 8.37557 11.873 9.01412 12.1375C9.65268 12.402 10.2329 12.7897 10.7216 13.2784C11.2103 13.7671 11.598 14.3473 11.8625 14.9859C12.127 15.6244 12.2632 16.3088 12.2632 17M7.25614 16.7368H7.26316M11 21H13C15.8003 21 17.2004 21 18.27 20.455C19.2108 19.9757 19.9757 19.2108 20.455 18.27C21 17.2004 21 15.8003 21 13V11C21 8.19974 21 6.79961 20.455 5.73005C19.9757 4.78924 19.2108 4.02433 18.27 3.54497C17.2004 3 15.8003 3 13 3H11C8.19974 3 6.79961 3 5.73005 3.54497C4.78924 4.02433 4.02433 4.78924 3.54497 5.73005C3 6.79961 3 8.19974 3 11V13C3 15.8003 3 17.2004 3.54497 18.27C4.02433 19.2108 4.78924 19.9757 5.73005 20.455C6.79961 21 8.19974 21 11 21Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
