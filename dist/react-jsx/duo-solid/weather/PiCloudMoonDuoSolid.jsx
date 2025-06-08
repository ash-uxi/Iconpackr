import React from 'react';

/**
 * PiCloudMoonDuoSolid icon from the duo-solid style in weather category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCloudMoonDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'cloud-moon icon',
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
      <path d="M11.1 7.25C10.8797 7.25 10.6619 7.26116 10.4473 7.28296C7.57785 7.57437 5.27022 9.76636 4.80312 12.5803C2.76407 13.0735 1.25 14.9095 1.25 17.1C1.25 19.6681 3.33188 21.75 5.9 21.75H14.5667C17.6134 21.75 20.0833 19.2801 20.0833 16.2333C20.0833 14.0765 18.8457 12.2103 17.0445 11.3033C16.1139 8.93105 13.8042 7.25 11.1 7.25Z" fill={color || "currentColor"} /> <path d="M16.4997 1C13.5934 1 11.1326 2.90743 10.3008 5.53872C10.5636 5.51311 10.8301 5.5 11.0997 5.5C14.3149 5.5 17.0895 7.36437 18.4103 10.0661C19.3589 10.6585 20.1619 11.4644 20.7511 12.417C22.1284 11.2251 22.9997 9.46431 22.9997 7.5L22.9996 7.45873C22.9974 7.10244 22.8057 6.77423 22.4966 6.59716C22.1874 6.42009 21.8073 6.42091 21.4989 6.59931C21.0587 6.85395 20.5478 7 19.9997 7C18.3428 7 16.9997 5.65685 16.9997 4C16.9997 3.45194 17.1458 2.94103 17.4004 2.50081C17.5788 2.19239 17.5796 1.81235 17.4025 1.50317C17.2255 1.19398 16.8973 1.00235 16.541 1.00013L16.4997 1Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" />
    </svg>
  );
}
