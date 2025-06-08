import React from 'react';

/**
 * PiBuildingApartmentOneStroke icon from the stroke style in building category.
 */
interface PiBuildingApartmentOneStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBuildingApartmentOneStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'building-apartment-one icon',
  ...props
}: PiBuildingApartmentOneStrokeProps): JSX.Element {
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
      <path d="M10 6H13M10 10H13M10 14H13M10 18H13M9.2 2H13.8C14.9201 2 15.4802 2 15.908 2.21799C16.2843 2.40973 16.5903 2.71569 16.782 3.09202C17 3.51984 17 4.0799 17 5.2V20.4C17 20.9601 17 21.2401 16.891 21.454C16.7951 21.6422 16.6422 21.7951 16.454 21.891C16.2401 22 15.9601 22 15.4 22H7.6C7.03995 22 6.75992 22 6.54601 21.891C6.35785 21.7951 6.20487 21.6422 6.10899 21.454C6 21.2401 6 20.9601 6 20.4V5.2C6 4.0799 6 3.51984 6.21799 3.09202C6.40973 2.71569 6.71569 2.40973 7.09202 2.21799C7.51984 2 8.0799 2 9.2 2Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
