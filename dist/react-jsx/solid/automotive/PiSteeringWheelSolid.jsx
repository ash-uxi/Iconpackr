import React from 'react';

/**
 * PiSteeringWheelSolid icon from the solid style in automotive category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSteeringWheelSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'steering-wheel icon',
  ...props 
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M11.9996 1.8501C17.6053 1.8501 22.1496 6.39542 22.1496 12.0001C22.1496 17.6043 17.602 22.1501 11.9996 22.1501C6.39546 22.1501 1.84961 17.604 1.84961 12.0001C1.84961 6.39564 6.39393 1.8501 11.9996 1.8501ZM4.11313 9.93635C6.47071 8.69968 9.15439 8 11.9996 8C14.8449 8 17.5285 8.69967 19.8861 9.93632C18.9723 6.43461 15.7877 3.8501 11.9996 3.8501C8.2115 3.8501 5.02692 6.43462 4.11313 9.93635ZM10.9996 19.5C10.9996 15.9102 8.08946 13 4.49961 13C4.30189 13 4.10641 13.0088 3.91353 13.026C4.37572 16.7066 7.293 19.6239 10.9736 20.0862C10.9908 19.8933 10.9996 19.6978 10.9996 19.5ZM13.0256 20.0862C16.7062 19.6239 19.6235 16.7066 20.0857 13.026C19.8928 13.0088 19.6973 13 19.4996 13C15.9098 13 12.9996 15.9101 12.9996 19.5C12.9996 19.6978 13.0084 19.8933 13.0256 20.0862ZM13.1 12.0001C13.1 11.3926 12.6075 10.9001 12 10.9001C11.3925 10.9001 10.9 11.3926 10.9 12.0001V12.0101C10.9 12.6176 11.3925 13.1101 12 13.1101C12.6075 13.1101 13.1 12.6176 13.1 12.0101V12.0001Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
