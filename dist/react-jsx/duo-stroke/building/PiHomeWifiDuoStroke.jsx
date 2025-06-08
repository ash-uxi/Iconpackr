import React from 'react';

/**
 * PiHomeWifiDuoStroke icon from the duo-stroke style in building category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiHomeWifiDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'home-wifi icon',
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
      <path d="M21 14.6V12.7587C21 11.7418 21 11.2334 20.8813 10.7571C20.7761 10.3349 20.6028 9.93275 20.3681 9.56641C20.1033 9.15313 19.7337 8.80402 18.9944 8.1058L16.3944 5.65025C14.8479 4.18966 14.0746 3.45937 13.1925 3.18385C12.416 2.94132 11.584 2.94132 10.8075 3.18385C9.92537 3.45937 9.15211 4.18966 7.60561 5.65025L5.00561 8.1058C4.26633 8.80401 3.89667 9.15313 3.63191 9.56641C3.39721 9.93275 3.22385 10.3349 3.11866 10.7571C3 11.2334 3 11.7418 3 12.7587V14.6C3 16.8402 3 17.9603 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C6.03968 21 7.15981 21 9.4 21H14.6C16.8402 21 17.9603 21 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C21 17.9603 21 16.8402 21 14.6Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.71592 14.7156C11.0844 13.7615 12.9162 13.7615 14.2847 14.7156M6.86523 11.8649C9.82917 9.37835 14.1714 9.37835 17.1354 11.8649M12.0003 18H12.0103M20.8813 10.7571C20.7761 10.3349 20.6028 9.93275 20.3681 9.56641C20.1033 9.15313 19.7337 8.80402 18.9944 8.1058L16.3944 5.65025C14.8479 4.18966 14.0746 3.45937 13.1925 3.18385C12.416 2.94132 11.584 2.94132 10.8075 3.18385C9.92535 3.45937 9.1521 4.18966 7.6056 5.65025L5.0056 8.1058C4.26631 8.80402 3.89666 9.15313 3.63189 9.56641C3.3972 9.93275 3.22384 10.3349 3.11865 10.7571" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
