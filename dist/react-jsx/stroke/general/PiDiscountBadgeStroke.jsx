import React from 'react';

/**
 * PiDiscountBadgeStroke icon from the stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiDiscountBadgeStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'discount-badge icon',
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
      <path d="M9 15.364L15.364 9M9.25 9.25H9.26M15.114 15.1143H15.124M7.62665 19.3959C8.47077 19.3674 9.28602 19.7051 9.86273 20.3221C11.019 21.5593 12.981 21.5593 14.1373 20.3221C14.714 19.7051 15.5292 19.3674 16.3733 19.3959C18.0658 19.4531 19.4531 18.0658 19.3959 16.3733C19.3674 15.5292 19.7051 14.714 20.3221 14.1373C21.5593 12.981 21.5593 11.019 20.3221 9.86273C19.7051 9.28602 19.3674 8.47077 19.3959 7.62665C19.4531 5.93422 18.0658 4.5469 16.3733 4.6041C15.5292 4.63262 14.714 4.29493 14.1373 3.67788C12.981 2.44071 11.019 2.44071 9.86273 3.67788C9.28602 4.29493 8.47077 4.63262 7.62665 4.6041C5.93422 4.5469 4.5469 5.93422 4.6041 7.62665C4.63262 8.47077 4.29493 9.28602 3.67788 9.86273C2.44071 11.019 2.44071 12.981 3.67788 14.1373C4.29493 14.714 4.63262 15.5292 4.6041 16.3733C4.5469 18.0658 5.93422 19.4531 7.62665 19.3959ZM9.5 9.25C9.5 9.38807 9.38807 9.5 9.25 9.5C9.11193 9.5 9 9.38807 9 9.25C9 9.11193 9.11193 9 9.25 9C9.38807 9 9.5 9.11193 9.5 9.25ZM15.364 15.1143C15.364 15.2524 15.2521 15.3643 15.114 15.3643C14.9759 15.3643 14.864 15.2524 14.864 15.1143C14.864 14.9762 14.9759 14.8643 15.114 14.8643C15.2521 14.8643 15.364 14.9762 15.364 15.1143Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
