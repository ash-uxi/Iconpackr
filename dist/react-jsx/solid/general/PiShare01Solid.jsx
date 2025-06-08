import React from 'react';

/**
 * PiShare01Solid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiShare01Solid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'share-01 icon',
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
      <path d="M18 9C16.8221 9 15.7631 8.49085 15.0311 7.68062C13.063 8.35027 11.2875 9.33133 9.78967 10.7166C9.92605 11.1195 10 11.5511 10 12C10 12.4489 9.92604 12.8806 9.78963 13.2835C11.2875 14.6687 13.063 15.6498 15.031 16.3194C15.763 15.5092 16.8221 15 18 15C20.2091 15 22 16.7909 22 19C22 21.2091 20.2091 23 18 23C15.7909 23 14 21.2091 14 19C14 18.6949 14.0342 18.3978 14.0988 18.1124C12.1219 17.4057 10.2792 16.3911 8.67613 14.973C7.96734 15.6114 7.02905 16 6 16C3.79086 16 2 14.2091 2 12C2 9.79086 3.79086 8 6 8C7.02908 8 7.9674 8.38861 8.6762 9.02709C10.2793 7.60892 12.1219 6.59439 14.0988 5.88769C14.0342 5.60218 14 5.30508 14 5C14 2.79086 15.7909 1 18 1C20.2091 1 22 2.79086 22 5C22 7.20914 20.2091 9 18 9Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
