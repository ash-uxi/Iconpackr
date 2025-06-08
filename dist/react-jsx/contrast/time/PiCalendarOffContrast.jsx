import React from 'react';

/**
 * PiCalendarOffContrast icon from the contrast style in time category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCalendarOffContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'calendar-off icon',
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
    <path d="M11.963 3c-1.366 0-2.443 0-3.314.06-.888.06-1.634.186-2.328.473A7 7 0 0 0 2.533 7.32c-.318.768-.439 1.605-.491 2.628C2 10.762 2 11.75 2 12.974v.063c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 .968 1.653 1 1 0 0 0 1.493.088L19.42 5.994a1 1 0 0 0-.088-1.493 7 7 0 0 0-1.653-.968c-.694-.287-1.44-.413-2.328-.474C14.481 3 13.403 3 12.037 3zM21.83 8.649a1 1 0 0 0-1.693-.548L7.1 21.137a1 1 0 0 0 .548 1.694c1.045.17 2.384.17 4.248.169h.14c1.366 0 2.443 0 3.314-.06.888-.06 1.634-.186 2.328-.473a7 7 0 0 0 3.788-3.788c.287-.694.413-1.44.474-2.328.059-.87.059-1.947.059-3.314v-.063c0-1.223 0-2.212-.042-3.025a12 12 0 0 0-.127-1.3"/>
  </g>
  <path d="M20.96 10c.04.788.04 1.755.04 3 0 2.796 0 4.194-.457 5.296a6 6 0 0 1-3.247 3.247C16.194 22 14.796 22 12 22c-1.955 0-3.227 0-4.191-.156M20.959 10h-1.307m1.308 0c-.023-.45-.06-.84-.116-1.191M3.04 10C3 10.788 3 11.755 3 13c0 2.796 0 4.194.457 5.296.212.513.492.989.83 1.417M3.04 10c.05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5.1 5.1 0 0 1 8 4.127M3.04 10H14M8 2v2.128m0 0V6m0-1.872C8.941 4 10.172 4 12 4s3.059 0 4 .128M16 2v2.128m0 0V6m0-1.872c.498.067.915.17 1.296.329.513.212.989.492 1.417.83M2 22l2.287-2.287m0 0L14 10m0 0 4.713-4.713m0 0L22 2"/>
    </svg>
  );
}
