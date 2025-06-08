import React from 'react';

/**
 * PiNotificationBellRemoveStroke icon from the stroke style in alerts category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiNotificationBellRemoveStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'notification-bell-remove icon',
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
      <path d="M9.15854 17.7236C7.91232 17.6641 6.66752 17.5653 5.42604 17.4274C4.42166 17.3158 3.77569 16.3065 4.09526 15.3478C4.25729 14.8617 4.42046 14.3836 4.46337 13.8687L4.81837 9.60867C5.12965 5.87324 8.25229 3 12.0007 3C15.7491 3 18.8717 5.87324 19.183 9.60867L19.5382 13.8711C19.5811 14.3856 19.7441 14.8637 19.9054 15.3497C20.2235 16.3078 19.5779 17.3156 18.5745 17.4271C17.3333 17.5651 16.0887 17.6639 14.8428 17.7235M9.15854 17.7236V18.1579C9.15854 19.7275 10.431 21 12.0006 21C13.5703 21 14.8428 19.7275 14.8428 18.1579V17.7235M9.15854 17.7236C11.0522 17.8141 12.9491 17.8141 14.8428 17.7235M9.00006 11H15.0001" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
