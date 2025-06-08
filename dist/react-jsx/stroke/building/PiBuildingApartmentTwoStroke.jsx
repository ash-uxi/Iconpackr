import React from 'react';

/**
 * PiBuildingApartmentTwoStroke icon from the stroke style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBuildingApartmentTwoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'building-apartment-two icon',
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
      <path d="M7 6H10M7 10H10M7 14H10M7 18H10M17 14H18M17 18H18M12.4 22C12.9601 22 13.2401 22 13.454 21.891C13.6422 21.7951 13.7951 21.6422 13.891 21.454C14 21.2401 14 20.9601 14 20.4V10M12.4 22H19.4C19.9601 22 20.2401 22 20.454 21.891C20.6422 21.7951 20.7951 21.6422 20.891 21.454C21 21.2401 21 20.9601 21 20.4V13.2C21 12.0799 21 11.5198 20.782 11.092C20.5903 10.7157 20.2843 10.4097 19.908 10.218C19.4802 10 18.9201 10 17.8 10H14M12.4 22H4.6C4.03995 22 3.75992 22 3.54601 21.891C3.35785 21.7951 3.20487 21.6422 3.10899 21.454C3 21.2401 3 20.9601 3 20.4V5.2C3 4.0799 3 3.51984 3.21799 3.09202C3.40973 2.71569 3.71569 2.40973 4.09202 2.21799C4.51984 2 5.0799 2 6.2 2H10.8C11.9201 2 12.4802 2 12.908 2.21799C13.2843 2.40973 13.5903 2.71569 13.782 3.09202C14 3.51984 14 4.0799 14 5.2V10" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
