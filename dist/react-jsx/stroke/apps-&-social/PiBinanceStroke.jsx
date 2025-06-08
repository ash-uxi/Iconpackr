import React from 'react';

/**
 * PiBinanceStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiBinanceStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'binance icon',
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
      <path d="M3.41135 13.7178L3.07019 13.3766C2.30994 12.6163 2.30994 11.3837 3.07019 10.6235L3.41135 10.2823M20.5886 10.2823L20.9298 10.6235C21.6901 11.3837 21.6901 12.6163 20.9298 13.3766L20.5886 13.7178M17.1532 17.1532L13.6195 20.6869C12.7251 21.5813 11.2749 21.5813 10.3805 20.6869L6.84681 17.1532M17.1532 6.84685L13.6195 3.31315C12.7251 2.41873 11.2749 2.41873 10.3805 3.31315L6.84681 6.84685M12.8088 14.6245L14.6236 12.8098C15.0708 12.3626 15.0708 11.6375 14.6236 11.1903L12.8088 9.37556C12.3616 8.92837 11.6366 8.92835 11.1894 9.37551L9.37444 11.1902C8.92716 11.6375 8.92716 12.3626 9.37444 12.8098L11.1894 14.6246C11.6366 15.0717 12.3616 15.0717 12.8088 14.6245Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
