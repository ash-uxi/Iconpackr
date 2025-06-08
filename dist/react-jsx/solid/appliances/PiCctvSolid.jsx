import React from 'react';

/**
 * PiCctvSolid icon from the solid style in appliances category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCctvSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cctv icon',
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
      <path d="M22.2103 8.97096C22.3532 8.4375 22.0366 7.88916 21.5032 7.74622C20.9697 7.60328 20.4214 7.91986 20.2784 8.45332L18.9843 13.283C18.8414 13.8164 19.158 14.3648 19.6914 14.5077C20.2249 14.6506 20.7732 14.3341 20.9162 13.8006L22.2103 8.97096Z" fill="currentColor" stroke="none"/>
  <path d="M7.0313 2.5517C5.43091 2.12287 3.7859 3.07262 3.35707 4.67302L2.55185 7.67812C2.12303 9.27852 3.07278 10.9235 4.67318 11.3524L8.55785 12.3933L7.25251 16.1108L3.00015 16.8195V15C3.00015 14.4477 2.55243 14 2.00015 14C1.44786 14 1.00015 14.4477 1.00015 15V17.9815C0.999951 17.993 0.99995 18.0045 1.00015 18.016V21C1.00015 21.5523 1.44786 22 2.00015 22C2.55243 22 3.00015 21.5523 3.00015 21V18.8471L7.5813 18.0836C8.30077 17.9637 8.89792 17.4616 9.13957 16.7734L10.4953 12.9124L15.5776 14.2742C16.6445 14.5601 17.7412 13.9269 18.0271 12.86L19.3499 7.92301C19.6358 6.85608 19.0026 5.75941 17.9357 5.47352L7.0313 2.5517Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
