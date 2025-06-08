import React from 'react';

/**
 * PiDeleteDustbin02Solid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDeleteDustbin02Solid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'delete-dustbin-02 icon',
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
      <path d="M8.21115 3.34164C8.9287 1.90653 10.3955 1 12 1C13.6045 1 15.0713 1.90653 15.7889 3.34164L16.618 5H20C20.5523 5 21 5.44772 21 6C21 6.55229 20.5523 7 20 7H19V15.0355C19 15.9373 19 16.6647 18.9596 17.2567C18.9181 17.8654 18.8305 18.4037 18.6194 18.9134C18.1119 20.1386 17.1386 21.1119 15.9134 21.6194C15.4037 21.8305 14.8654 21.9181 14.2567 21.9596C13.6647 22 12.9373 22 12.0355 22H11.9645C11.0627 22 10.3353 22 9.74331 21.9596C9.13456 21.9181 8.59628 21.8305 8.08658 21.6194C6.86144 21.1119 5.88807 20.1386 5.3806 18.9134C5.16948 18.4037 5.08191 17.8654 5.04038 17.2567C4.99999 16.6647 4.99999 15.9373 5 15.0355L5 7H4C3.44772 7 3 6.55229 3 6C3 5.44772 3.44772 5 4 5H7.38197L8.21115 3.34164ZM9.61803 5L10 4.23607C10.3788 3.47852 11.153 3 12 3C12.847 3 13.6212 3.47852 14 4.23607L14.382 5H9.61803ZM11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11V16C9 16.5523 9.44772 17 10 17C10.5523 17 11 16.5523 11 16V11ZM15 11C15 10.4477 14.5523 10 14 10C13.4477 10 13 10.4477 13 11V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V11Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
