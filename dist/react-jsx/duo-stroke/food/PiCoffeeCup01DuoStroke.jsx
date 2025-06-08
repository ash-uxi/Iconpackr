import React from 'react';

/**
 * PiCoffeeCup01DuoStroke icon from the duo-stroke style in food category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiCoffeeCup01DuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'coffee-cup-01 icon',
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
      <path d="M17.9161 16C17.9282 15.9282 17.9391 15.8559 17.9487 15.7832C18 15.3933 18 14.9288 18 14V11.2C18 10.7017 18 10.3143 17.9808 10M17.9161 16C17.4794 18.5887 15.4029 20.6038 12.7832 20.9487C12.3933 21 11.9288 21 11 21C10.0712 21 9.60674 21 9.21684 20.9487C6.52444 20.5942 4.40579 18.4756 4.05133 15.7832C4 15.3933 4 14.9288 4 14V11.2C4 10.0799 4 9.51984 4.21799 9.09202C4.40973 8.71569 4.71569 8.40973 5.09202 8.21799C5.51984 8 6.0799 8 7.2 8H14.8C15.9201 8 16.4802 8 16.908 8.21799C17.2843 8.40973 17.5903 8.71569 17.782 9.09202C17.903 9.32953 17.9569 9.60779 17.9808 10M17.9161 16H19C20.6569 16 22 14.6569 22 13C22 11.3431 20.6569 10 19 10H17.9808" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7 4V3.93426C7 3.55883 7.18763 3.20825 7.5 3C7.81237 2.79175 8 2.44117 8 2.06574V2M11 4V3.93426C11 3.55883 11.1876 3.20825 11.5 3C11.8124 2.79175 12 2.44117 12 2.06574V2M15 4V3.93426C15 3.55883 15.1876 3.20825 15.5 3C15.8124 2.79175 16 2.44117 16 2.06574V2" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
