import React from 'react';

/**
 * PiArrowUpCircleSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiArrowUpCircleSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'arrow-up-circle icon',
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
      <path d="M1.8501 12.0001C1.8501 6.39441 6.39441 1.8501 12.0001 1.8501C17.6058 1.8501 22.1501 6.39441 22.1501 12.0001C22.1501 17.6058 17.6058 22.1501 12.0001 22.1501C6.39441 22.1501 1.8501 17.6058 1.8501 12.0001ZM8.80852 12.5372C9.46807 11.6312 10.2015 10.7872 11.0001 10.0142L11.0001 16C11.0001 16.5523 11.4478 17 12.0001 17C12.5524 17 13.0001 16.5523 13.0001 16L13.0001 10.0142C13.7986 10.7873 14.532 11.6312 15.1916 12.5372C15.5166 12.9837 16.1421 13.0821 16.5886 12.7571C17.0351 12.432 17.1336 11.8066 16.8085 11.3601C15.7211 9.86631 14.4501 8.52387 13.0274 7.36624C12.7303 7.12448 12.3667 7 12.0001 7C11.6334 7 11.2698 7.12448 10.9727 7.36624C9.55002 8.52387 8.27906 9.86631 7.1916 11.3601C6.86655 11.8066 6.96501 12.432 7.41151 12.7571C7.85801 13.0821 8.48347 12.9837 8.80852 12.5372Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
