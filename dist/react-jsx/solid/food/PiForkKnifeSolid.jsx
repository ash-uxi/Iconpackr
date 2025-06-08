import React from 'react';

/**
 * PiForkKnifeSolid icon from the solid style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiForkKnifeSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'fork-knife icon',
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
      <path d="M18.0035 17.0567V21.0001C18.0035 21.5523 18.4512 22.0001 19.0035 22.0001C19.5558 22.0001 20.0035 21.5523 20.0035 21.0001L20.0035 3.83094C20.0035 2.37127 18.3767 1.49717 17.1601 2.309C15.8547 3.18011 15.0182 4.59973 14.8879 6.16408L14.389 12.1567C14.3446 12.6878 14.3118 13.08 14.3424 13.425C14.5025 15.2314 15.8566 16.7051 17.6433 17.0152C17.7565 17.0348 17.8756 17.0479 18.0035 17.0567Z" fill="currentColor" stroke="none"/>
  <path d="M5.12412 2.00784C5.67214 2.07634 6.06087 2.57613 5.99237 3.12415L5.53931 6.7486C5.41186 7.76821 5.9264 8.76082 6.83306 9.24437C6.88796 9.27365 6.94367 9.30072 7.00009 9.32559V3.00012C7.00009 2.44783 7.4478 2.00012 8.00009 2.00012C8.55237 2.00012 9.00009 2.44783 9.00009 3.00012V9.32559C9.0565 9.30072 9.11222 9.27365 9.16711 9.24437C10.0738 8.76082 10.5883 7.76821 10.4609 6.7486L10.0078 3.12415C9.93931 2.57613 10.328 2.07634 10.8761 2.00784C11.4241 1.93934 11.9239 2.32806 11.9924 2.87608L12.4454 6.50053C12.6757 8.34244 11.7462 10.1355 10.1083 11.0091C9.75452 11.1978 9.38169 11.3358 9.00009 11.4231V21.0001C9.00009 21.5524 8.55237 22.0001 8.00009 22.0001C7.4478 22.0001 7.00009 21.5524 7.00009 21.0001V11.4231C6.61849 11.3358 6.24566 11.1978 5.89189 11.0091C4.25403 10.1355 3.32452 8.34244 3.55476 6.50053L4.00781 2.87608C4.07631 2.32806 4.5761 1.93934 5.12412 2.00784Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
