import React from 'react';

/**
 * PiUserThreeDuoStroke icon from the duo-stroke style in users category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUserThreeDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'user-three icon',
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
      <path d="M2.64455 15.6464C1.65198 16.3211 1 17.4594 1 18.75C1 19.6724 1.55505 20.4652 2.34936 20.8125M21.3555 15.6462C22.348 16.3208 23 17.4592 23 18.7498C23 19.6722 22.445 20.4649 21.6506 20.8123M8.25 21H15.75C16.9926 21 18 19.9926 18 18.75C18 16.6789 16.3211 15 14.25 15H9.75C7.67893 15 6 16.6789 6 18.75C6 19.9926 7.00736 21 8.25 21Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M4.70584 3.7229C3.67433 4.44635 3 5.64444 3 7.00003C3 8.35562 3.67433 9.55371 4.70584 10.2772M19.2942 3.72266C20.3257 4.44611 21 5.6442 21 6.99979C21 8.35537 20.3257 9.55346 19.2942 10.2769M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
