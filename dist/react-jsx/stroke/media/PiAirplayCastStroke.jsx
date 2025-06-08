import React from 'react';

/**
 * PiAirplayCastStroke icon from the stroke style in media category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAirplayCastStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'airplay-cast icon',
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
      <path d="M19.358 17.2311C19.4576 17.1584 19.5536 17.0813 19.6458 17C20.0215 16.6686 20.3339 16.2676 20.564 15.816C21 14.9603 21 13.8402 21 11.6V10.4C21 8.15979 21 7.03968 20.564 6.18404C20.1805 5.43139 19.5686 4.81947 18.816 4.43597C17.9603 4 16.8402 4 14.6 4H9.4C7.15979 4 6.03968 4 5.18404 4.43597C4.43139 4.81947 3.81947 5.43139 3.43597 6.18404C3 7.03968 3 8.15979 3 10.4V11.6C3 13.8402 3 14.9603 3.43597 15.816C3.72294 16.3792 4.13781 16.8636 4.64384 17.2324M9.8868 21H14.1132C15.0554 21 15.5265 21 15.792 20.8028C16.0234 20.6309 16.1694 20.3675 16.1925 20.0801C16.219 19.7505 15.9694 19.351 15.47 18.552L14.7136 17.3418C13.8138 15.902 13.3638 15.1822 12.7878 14.9353C12.2847 14.7197 11.7153 14.7197 11.2122 14.9353C10.6362 15.1822 10.1862 15.902 9.2864 17.3418L8.53 18.552C8.03064 19.351 7.78096 19.7505 7.80746 20.0801C7.83056 20.3675 7.97656 20.6309 8.208 20.8028C8.47351 21 8.94461 21 9.8868 21Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
