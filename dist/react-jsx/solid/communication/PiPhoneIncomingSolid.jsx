import React from 'react';

/**
 * PiPhoneIncomingSolid icon from the solid style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPhoneIncomingSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'phone-incoming icon',
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
      <path d="M20.706 4.70735C21.0965 4.31682 21.0965 3.68366 20.706 3.29313C20.3155 2.90261 19.6823 2.90261 19.2918 3.29314L15.7406 6.84431C15.7342 6.23655 15.7681 5.6302 15.8425 5.0293C15.9104 4.4812 15.5211 3.98187 14.973 3.91401C14.4249 3.84616 13.9255 4.23547 13.8577 4.78357C13.6981 6.07285 13.7009 7.38124 13.8647 8.67855C13.9613 9.44328 14.5558 10.0379 15.3206 10.1345C16.6179 10.2983 17.9264 10.3011 19.2155 10.1415C19.7636 10.0737 20.153 9.57435 20.0851 9.02625C20.0173 8.47814 19.518 8.08881 18.9699 8.15665C18.369 8.23102 17.7626 8.26498 17.1549 8.25851L20.706 4.70735Z" fill="currentColor" stroke="none"/>
  <path d="M6.74569 13.2229C7.17822 12.9016 7.64066 12.5488 8.04598 12.1732C9.77685 10.5692 10.4902 8.14596 9.90462 5.85989C9.70772 5.09122 9.40106 4.20911 8.85271 3.4823C8.27918 2.7221 7.44187 2.13777 6.27746 2.03275C5.83702 1.99302 5.2517 1.97614 4.73589 2.06049C2.841 2.37036 1.85124 4.21145 2.04177 5.82633C2.37804 8.67659 3.23236 11.2561 4.54604 13.4822C5.94468 15.8523 7.85573 17.8073 10.1872 19.2543C12.486 20.681 15.1788 21.605 18.1701 21.9581C19.7857 22.1488 21.6259 21.158 21.9355 19.2635C22.0255 18.7127 22.0115 18.1168 21.9525 17.6186C21.8063 16.3839 21.121 15.537 20.2918 14.9792C19.4954 14.4435 18.5453 14.1561 17.7479 13.9733C15.6954 13.5026 13.5426 14.067 11.9849 15.4841C11.4541 15.9669 10.9612 16.5509 10.522 17.0794C9.03299 16.0333 7.76364 14.7374 6.74569 13.2229Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
