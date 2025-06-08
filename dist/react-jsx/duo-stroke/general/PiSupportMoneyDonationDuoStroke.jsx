import React from 'react';

/**
 * PiSupportMoneyDonationDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSupportMoneyDonationDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'support-money-donation icon',
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
      <path d="M15.4234 14.0003H19.8945C21.2581 14.0003 23.3623 15.6874 21.8448 16.9972C17.4998 21.0003 10.4998 21.0003 5.99985 16.9136M15.4234 14.0003C15.5518 14.1566 15.664 14.3285 15.7568 14.5141C16.0982 15.1969 15.6016 16.0003 14.8382 16.0003H9.99985M15.4234 14.0003C14.9099 13.3753 14.1371 13.0003 13.3074 13.0003H12.1851C12.0633 13.0003 11.9431 12.9719 11.8341 12.9174C10.0283 12.0145 8.00072 11.6536 5.99609 11.8767C5.99858 11.9176 5.99985 11.9588 5.99985 12.0003V16.9136M5.99985 16.9136V17.0003" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M19.5 3.62734C20.4067 4.25982 21 5.31063 21 6.5C21 8.26324 19.6961 9.72194 18 9.96456M2 17V12C2 10.8954 2.89543 10 4 10C5.10457 10 6 10.8954 6 12V17C6 18.1046 5.10457 19 4 19C2.89543 19 2 18.1046 2 17ZM17 5.5C17 7.433 15.433 9 13.5 9C11.567 9 10 7.433 10 5.5C10 3.567 11.567 2 13.5 2C15.433 2 17 3.567 17 5.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
