import React from 'react';

/**
 * PiKeyRight02Solid icon from the solid style in security category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiKeyRight02Solid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'key-right-02 icon',
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
      <path d="M11.1098 9C10.4631 8.00627 9.51254 7.24812 8.39988 6.83856C7.28722 6.429 6.072 6.38996 4.93535 6.72725C3.7987 7.06455 2.80147 7.76011 2.0923 8.71029C1.38314 9.66046 1 10.8144 1 12C1 13.1856 1.38314 14.3395 2.0923 15.2897C2.80147 16.2399 3.7987 16.9355 4.93535 17.2727C6.072 17.61 7.28722 17.571 8.39988 17.1614C9.51254 16.7519 10.4631 15.9937 11.1098 15H13.9998C14.265 14.9999 14.5193 14.8945 14.7068 14.707L15.4998 13.914L16.2928 14.707C16.4803 14.8945 16.7346 14.9999 16.9998 15H19.9998C20.265 14.9999 20.5193 14.8945 20.7068 14.707L22.7068 12.707C22.8942 12.5195 22.9996 12.2652 22.9996 12C22.9996 11.7348 22.8942 11.4805 22.7068 11.293L20.7068 9.293C20.5193 9.10545 20.265 9.00006 19.9998 9H11.1098ZM4.83977 10.12C5.0032 9.99743 5.19753 9.92279 5.40099 9.90445C5.60444 9.8861 5.80899 9.92477 5.99171 10.0161C6.17442 10.1075 6.32809 10.2479 6.43549 10.4217C6.54289 10.5955 6.59977 10.7957 6.59977 11V13C6.59977 13.2043 6.54289 13.4045 6.43549 13.5783C6.32809 13.7521 6.17442 13.8925 5.99171 13.9839C5.80899 14.0752 5.60444 14.1139 5.40099 14.0956C5.19753 14.0772 5.0032 14.0026 4.83977 13.88C4.54791 13.6611 4.31102 13.3773 4.14787 13.051C3.98471 12.7246 3.89977 12.3648 3.89977 12C3.89977 11.6352 3.98471 11.2754 4.14787 10.949C4.31102 10.6227 4.54791 10.3389 4.83977 10.12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd" stroke="none"/>
    </svg>
  );
}
