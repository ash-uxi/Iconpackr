import React from 'react';

/**
 * PiSpatialEnvironmentDuoSolid icon from the duo-solid style in ar-&-vr category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSpatialEnvironmentDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'spatial-environment icon',
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
      <path d="M20.4961 2.4085C21.7337 2.08624 22.9517 2.99244 22.9987 4.27051C23 4.30822 23 4.35063 23 4.38632V16.6136C23 16.6492 23 16.6917 22.9987 16.7294C22.9517 18.0074 21.7337 18.9136 20.4961 18.5914C20.4596 18.5819 20.419 18.5697 20.3848 18.5594L20.3745 18.5563C20.0467 18.458 19.8903 18.4111 19.7368 18.3669C14.6813 16.9135 9.31867 16.9135 4.26319 18.3669C4.10974 18.4111 3.95328 18.458 3.62549 18.5563L3.61525 18.5594C3.58109 18.5697 3.54046 18.5819 3.50396 18.5914C2.26629 18.9136 1.04833 18.0074 1.00136 16.7294C0.99997 16.6917 0.999988 16.6493 1 16.6136V4.3863C0.999988 4.35062 0.99997 4.30822 1.00136 4.27051C1.04833 2.99244 2.26629 2.08624 3.50396 2.4085C3.54047 2.41801 3.58108 2.43021 3.61524 2.44047L3.62549 2.44355C3.95327 2.54189 4.10974 2.58881 4.26319 2.63293C9.31867 4.08642 14.6813 4.08642 19.7368 2.63293C19.8903 2.58881 20.0467 2.54189 20.3745 2.44355L20.3848 2.44047C20.4189 2.43021 20.4595 2.41801 20.4961 2.4085Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M8 21C8 19.8954 8.89543 19 10 19H14C15.1046 19 16 19.8954 16 21C16 21.5523 16.4477 22 17 22C17.5523 22 18 21.5523 18 21C18 18.7909 16.2091 17 14 17H10C7.79086 17 6 18.7909 6 21C6 21.5523 6.44772 22 7 22C7.55228 22 8 21.5523 8 21Z" fill={color || "currentColor"} /> <path d="M8.75 12.5C8.75 10.7051 10.2051 9.25 12 9.25C13.7949 9.25 15.25 10.7051 15.25 12.5C15.25 14.2949 13.7949 15.75 12 15.75C10.2051 15.75 8.75 14.2949 8.75 12.5Z" fill={color || "currentColor"} />
    </svg>
  );
}
