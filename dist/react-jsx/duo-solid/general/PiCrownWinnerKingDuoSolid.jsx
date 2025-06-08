import React from 'react';

/**
 * PiCrownWinnerKingDuoSolid icon from the duo-solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCrownWinnerKingDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'crown-winner-king icon',
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
      <path d="M13.2996 2.37972C12.8304 1.20676 11.17 1.20676 10.7008 2.37972L9.93587 4.29206C8.86042 6.98068 5.3863 7.69377 3.33871 5.64618C2.1813 4.48877 0.231176 5.56961 0.599234 7.16453L3.08407 17.9322C3.14887 18.2129 3.33163 18.4521 3.58553 18.5884C3.83943 18.7247 4.13977 18.7448 4.40959 18.6436C9.30359 16.8084 14.6968 16.8084 19.5908 18.6436C19.8606 18.7448 20.1609 18.7247 20.4148 18.5884C20.6687 18.4521 20.8515 18.2129 20.9163 17.9322L23.4011 7.16453C23.7692 5.56962 21.8191 4.48877 20.6617 5.64618C18.6141 7.69377 15.1399 6.98067 14.0645 4.29206L13.2996 2.37972Z" fill={color || "currentColor"} /> <path d="M19.5804 20.564C14.693 18.7313 9.30708 18.7313 4.41966 20.564C3.90253 20.758 3.64053 21.3344 3.83445 21.8515C4.02837 22.3686 4.60478 22.6306 5.1219 22.4367C9.55656 20.7737 14.4435 20.7737 18.8782 22.4367C19.3953 22.6306 19.9717 22.3686 20.1657 21.8515C20.3596 21.3344 20.0976 20.758 19.5804 20.564Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
