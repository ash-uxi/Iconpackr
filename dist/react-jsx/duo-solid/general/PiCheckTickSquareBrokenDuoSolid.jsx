import React from 'react';

/**
 * PiCheckTickSquareBrokenDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCheckTickSquareBrokenDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'check-tick-square-broken icon',
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
      <path fill={color || "currentColor"} d="M11.963 2c-1.366 0-2.443 0-3.314.06-.888.06-1.634.186-2.328.473A7 7 0 0 0 2.533 6.32c-.287.694-.413 1.44-.474 2.328C2 9.519 2 10.597 2 11.963v.074c0 1.366 0 2.443.06 3.314.06.888.186 1.634.473 2.328a7 7 0 0 0 3.788 3.788c.694.287 1.44.413 2.328.474.87.059 1.948.059 3.314.059h.074c1.366 0 2.443 0 3.314-.06.888-.06 1.634-.186 2.328-.473a7 7 0 0 0 3.788-3.788c.287-.694.413-1.44.474-2.328.059-.87.059-1.948.059-3.314v-.074c0-1.366 0-2.443-.06-3.314-.06-.888-.186-1.634-.473-2.328a7 7 0 0 0-3.788-3.788c-.694-.287-1.44-.413-2.328-.474C14.481 2 13.403 2 12.037 2z" opacity=".28" /> <path d="m21.035 5.403-.793.541a25.64 25.64 0 0 0-7.799 8.447l-.359.629L8.61 11" />
    </svg>
  );
}
