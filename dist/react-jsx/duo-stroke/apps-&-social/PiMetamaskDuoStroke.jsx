import React from 'react';

/**
 * PiMetamaskDuoStroke icon from the duo-stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMetamaskDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'metamask icon',
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
      <path d="M20.7383 3.52193C21.0851 3.69806 21.35 4.00204 21.4769 4.36972C21.687 4.97887 22.0568 5.66067 21.8899 6.31972L21.8919 6.31872L20.7499 10.8487C20.563 11.5901 20.5925 12.3696 20.8349 13.0947L21.6919 15.6577C21.7908 15.953 21.7954 16.2717 21.7049 16.5697L20.9869 18.9347C20.8738 19.3068 20.6206 19.6205 20.2807 19.8095C19.9407 19.9985 19.5407 20.048 19.1649 19.9477L16.8009 19.3167C16.5876 19.2597 16.3643 19.2505 16.1471 19.2897C15.9298 19.329 15.7238 19.4157 15.5439 19.5437L13.8889 20.7217C13.6349 20.9026 13.3308 20.9997 13.0189 20.9997H10.9759C10.6639 20.9997 10.3579 20.9017 10.1039 20.7207L8.45893 19.5457C8.27895 19.4171 8.07274 19.3298 7.85508 19.2902C7.63741 19.2506 7.41369 19.2597 7.19993 19.3167L4.83993 19.9477C4.46363 20.0482 4.06299 19.9983 3.72277 19.8087C3.38255 19.6191 3.12943 19.3046 3.01693 18.9317L2.30293 16.5657C2.21366 16.27 2.21785 15.954 2.31493 15.6607L3.16593 13.0877C3.40426 12.3672 3.4327 11.5938 3.24793 10.8577L2.10893 6.31572C1.94614 5.66518 2.30616 4.99391 2.51193 4.39172C2.63924 4.02005 2.90729 3.71315 3.25846 3.53701C3.60964 3.36086 4.0159 3.32952 4.38993 3.44972L8.98893 4.92772C9.13758 4.97552 9.29279 4.99981 9.44893 4.99972H14.2749C14.4244 4.99982 14.573 4.97757 14.7159 4.93372L19.6179 3.42572C19.9897 3.31131 20.3914 3.34581 20.7383 3.52193Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.5 12C9.5 12.5447 9.04467 13 8.5 13C7.95533 13 7.5 12.5447 7.5 12C7.5 11.4553 7.95533 11 8.5 11C9.04467 11 9.5 11.4553 9.5 12ZM16.5 12C16.5 12.5447 16.0447 13 15.5 13C14.9553 13 14.5 12.5447 14.5 12C14.5 11.4553 14.9553 11 15.5 11C16.0447 11 16.5 11.4553 16.5 12Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
