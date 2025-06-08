import React from 'react';

/**
 * PiAmieSoSolid icon from the solid style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAmieSoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'amie-so icon',
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
      <path d="M2 8.21053C2 4.78055 4.78055 2 8.21053 2C9.63691 2 10.9518 2.4817 12 3.28984C13.0482 2.4817 14.3631 2 15.7895 2C19.2195 2 22 4.78055 22 8.21053C22 9.63691 21.5183 10.9518 20.7102 12C21.5183 13.0482 22 14.3631 22 15.7895C22 19.2195 19.2195 22 15.7895 22C14.3631 22 13.0482 21.5183 12 20.7102C10.9518 21.5183 9.63691 22 8.21053 22C4.78055 22 2 19.2195 2 15.7895C2 14.3631 2.4817 13.0482 3.28984 12C2.4817 10.9518 2 9.63691 2 8.21053ZM12 8C10.8954 8 10 8.89543 10 10V14C10 15.1046 10.8954 16 12 16C13.1046 16 14 15.1046 14 14V10C14 8.89543 13.1046 8 12 8Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
