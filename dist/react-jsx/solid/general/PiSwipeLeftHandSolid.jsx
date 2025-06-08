import React from 'react';

/**
 * PiSwipeLeftHandSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSwipeLeftHandSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'swipe-left-hand icon',
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
      <path d="M10.8713 3.83172C10.4425 2.23133 8.79753 1.28156 7.19709 1.71039C5.59669 2.13922 4.64695 3.78423 5.07577 5.38463L6.9774 12.4816C5.46754 11.7057 3.61199 11.9209 2.31544 13.0707C1.51588 13.7797 1.51142 15.0268 2.30588 15.7415L8.0939 20.9487C10.3344 22.9644 13.6364 23.0879 16.3254 22.1184C19.0157 21.1485 21.4594 18.9482 21.7576 15.8825C21.9124 14.2906 21.6774 12.3965 20.8513 10.9013C20.4323 10.1429 19.8447 9.45923 19.0513 8.995C18.249 8.52561 17.2951 8.31557 16.2137 8.42037L12.205 8.80901L10.8713 3.83172Z" fill="currentColor" stroke="none"/>
  <path d="M16.7489 2.90586C17.2491 2.67165 17.4647 2.07632 17.2305 1.57616C16.9963 1.076 16.4009 0.8604 15.9008 1.09461C15.0331 1.50092 14.2229 2.01687 13.4906 2.62952C13.3663 2.73352 13.2648 2.85706 13.1882 2.9928C13.0984 3.11735 13.0361 3.26452 13.0115 3.42674C12.9904 3.56534 12.9989 3.70161 13.0322 3.82915C13.0529 3.97115 13.097 4.11127 13.1653 4.24362C13.6033 5.09209 14.1504 5.88152 14.793 6.59215C15.1635 7.00178 15.7958 7.03357 16.2055 6.66313C16.6151 6.2927 16.6469 5.66034 16.2764 5.2507C16.2372 5.20733 16.1984 5.16361 16.1601 5.11954C17.9955 5.72969 19.6627 6.70985 21.0734 7.97244C21.4849 8.34077 22.1171 8.30575 22.4854 7.89422C22.8538 7.4827 22.8187 6.8505 22.4072 6.48217C20.6911 4.94622 18.6403 3.77456 16.3772 3.09033C16.4996 3.0261 16.6235 2.96459 16.7489 2.90586Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
