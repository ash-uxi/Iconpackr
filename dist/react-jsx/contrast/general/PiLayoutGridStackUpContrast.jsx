import React from 'react';

/**
 * PiLayoutGridStackUpContrast icon from the contrast style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiLayoutGridStackUpContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'layout-grid-stack-up icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M6.2 3c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 10 5.08 10 6.2 10h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 8.48 21 7.92 21 6.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3zM5.5 14c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 15.803 3 16.035 3 16.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 19.197 8 18.965 8 18.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 14 5.965 14 5.5 14M15.2 14c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 15.52 12 16.08 12 17.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 21 14.08 21 15.2 21h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 14 18.92 14 17.8 14z"/>
  </g>
  <path d="M15.2 14c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C12 15.52 12 16.08 12 17.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C13.52 21 14.08 21 15.2 21h2.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 19.48 21 18.92 21 17.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 14 18.92 14 17.8 14zM5.5 14c-.465 0-.697 0-.89.038a2 2 0 0 0-1.572 1.572C3 15.803 3 16.035 3 16.5v2c0 .465 0 .697.038.89a2 2 0 0 0 1.572 1.572c.193.038.425.038.89.038s.697 0 .89-.038a2 2 0 0 0 1.572-1.572C8 19.197 8 18.965 8 18.5v-2c0-.465 0-.697-.038-.89a2 2 0 0 0-1.572-1.572C6.197 14 5.965 14 5.5 14M6.2 3c-1.12 0-1.68 0-2.108.218a2 2 0 0 0-.874.874C3 4.52 3 5.08 3 6.2v.6c0 1.12 0 1.68.218 2.108a2 2 0 0 0 .874.874C4.52 10 5.08 10 6.2 10h11.6c1.12 0 1.68 0 2.108-.218a2 2 0 0 0 .874-.874C21 8.48 21 7.92 21 6.8v-.6c0-1.12 0-1.68-.218-2.108a2 2 0 0 0-.874-.874C19.48 3 18.92 3 17.8 3z"/>
    </svg>
  );
}
