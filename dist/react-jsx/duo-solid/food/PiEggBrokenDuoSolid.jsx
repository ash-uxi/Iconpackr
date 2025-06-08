import React from 'react';

/**
 * PiEggBrokenDuoSolid icon from the duo-solid style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiEggBrokenDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'egg-broken icon',
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
      <path d="M12.0002 1.5C10.6599 1.5 9.4637 2.11873 8.46744 2.98621C7.47017 3.85458 6.60724 5.02644 5.90255 6.28743C4.503 8.79181 3.61133 11.8617 3.61133 14.1111C3.61133 18.7442 7.36716 22.5 12.0002 22.5C16.6333 22.5 20.3891 18.7442 20.3891 14.1111C20.3891 11.8617 19.4974 8.79181 18.0979 6.28743C17.3932 5.02644 16.5303 3.85458 15.533 2.98621C14.5367 2.11873 13.3406 1.5 12.0002 1.5Z" fill={color || "currentColor"} opacity="0.28" /> <path d="M6.01514 6.08895C6.41584 6.25795 6.80082 6.45658 7.16675 6.68428C8.00317 7.20475 8.7403 7.85353 9.34015 8.60524L7.91206 10.5818C7.67171 10.9145 7.63051 11.3832 7.87243 11.7686C8.65864 13.0211 9.75706 14.0897 11.3368 14.6234C11.86 14.8001 12.4275 14.5193 12.6043 13.996C12.781 13.4728 12.5002 12.9053 11.9769 12.7286C11.1318 12.443 10.4673 11.9227 9.92129 11.216L11.3463 9.2436C11.6026 8.88888 11.6379 8.38763 11.367 7.98766C10.5459 6.77496 9.46592 5.75936 8.22339 4.98619C7.87486 4.76931 7.51409 4.57452 7.14315 4.40173C6.73363 4.92642 6.35677 5.49642 6.01514 6.08895Z" fill={color || "currentColor"} />
    </svg>
  );
}
