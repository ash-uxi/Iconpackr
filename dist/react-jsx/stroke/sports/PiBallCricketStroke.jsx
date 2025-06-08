import React from 'react';

/**
 * PiBallCricketStroke icon from the stroke style in sports category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBallCricketStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'ball-cricket icon',
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
      <path d="M14.3681 3.16171C19.2493 4.46962 22.1461 9.48691 20.8381 14.3681C19.8022 18.2344 16.439 20.8556 12.6596 21.1286M14.3681 3.16171C9.48691 1.85379 4.46962 4.75052 3.16171 9.63173C1.85379 14.5129 4.75052 19.5302 9.63173 20.8381M14.3681 3.16171L9.63173 20.8381M9.63173 20.8381C10.6467 21.1101 11.6675 21.2003 12.6596 21.1286M16.9681 5.04901L16.7093 6.01493M15.9329 8.91271L15.6741 9.87864M14.8976 12.7764L14.6388 13.7423M13.8623 16.6401L13.6035 17.606M12.827 20.5038L12.6596 21.1286M9.61968 9.29165L9.36086 10.2576M10.655 5.42794L10.3961 6.39387M8.5844 13.1554L8.32558 14.1213M7.54913 17.0191L7.29031 17.985" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
