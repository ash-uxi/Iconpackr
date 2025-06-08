import React from 'react';

/**
 * PiDoubleChevronUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiDoubleChevronUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDoubleChevronUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'double-chevron-up icon',
  ...props
}: PiDoubleChevronUpSolidProps): JSX.Element {
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
      <path d="M8.07479 11.9972C7.68634 12.0263 7.31633 11.8272 7.12662 11.487C6.9369 11.1468 6.96201 10.7274 7.19097 10.4122C8.30456 8.87943 9.61063 7.5056 11.0751 6.32681C11.6164 5.89106 12.3836 5.89106 12.9249 6.32681C14.3894 7.5056 15.6955 8.87943 16.809 10.4122C17.038 10.7274 17.0631 11.1468 16.8734 11.487C16.6837 11.8272 16.3137 12.0263 15.9252 11.9972L13.7202 11.8318C12.575 11.7459 11.425 11.7459 10.2798 11.8318L8.07479 11.9972Z" fill="currentColor" stroke="none"/>
  <path d="M8.07479 17.9972C7.68634 18.0263 7.31633 17.8272 7.12662 17.487C6.9369 17.1468 6.96201 16.7274 7.19097 16.4122C8.30456 14.8794 9.61063 13.5056 11.0751 12.3268C11.6164 11.8911 12.3836 11.8911 12.9249 12.3268C14.3894 13.5056 15.6955 14.8794 16.809 16.4122C17.038 16.7274 17.0631 17.1468 16.8734 17.487C16.6837 17.8272 16.3137 18.0263 15.9252 17.9972L13.7202 17.8318C12.575 17.7459 11.425 17.7459 10.2798 17.8318L8.07479 17.9972Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
