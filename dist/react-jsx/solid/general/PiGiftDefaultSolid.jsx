import React from 'react';

/**
 * PiGiftDefaultSolid icon from the solid style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGiftDefaultSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gift-default icon',
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
      <path d="M13 13L13 22H15.2413C16.0463 22 16.7106 22 17.2518 21.9558C17.8139 21.9099 18.3306 21.8113 18.816 21.564C19.5686 21.1805 20.1805 20.5686 20.564 19.816C20.8113 19.3306 20.9099 18.8139 20.9558 18.2518C21 17.7106 21 17.0463 21 16.2413V14C21 13.4477 20.5523 13 20 13H13Z" fill="currentColor" stroke="none"/>
  <path d="M4 13H11L11 22H8.75868C7.95372 22 7.28936 22 6.74817 21.9558C6.18608 21.9099 5.66937 21.8113 5.18404 21.564C4.43139 21.1805 3.81947 20.5686 3.43597 19.816C3.18868 19.3306 3.09012 18.8139 3.04419 18.2518C2.99998 17.7106 2.99999 17.0463 3 16.2413V14C3 13.4477 3.44772 13 4 13Z" fill="currentColor" stroke="none"/>
  <path d="M6 4.5C6 2.567 7.567 1 9.5 1C10.4793 1 11.3647 1.40223 12 2.05051C12.6353 1.40223 13.5207 1 14.5 1C16.433 1 18 2.567 18 4.5C18 5.0368 17.8792 5.54537 17.6632 6H20.5C21.8807 6 23 7.11929 23 8.5C23 9.88071 21.8807 11 20.5 11H13V6H14.5C15.3284 6 16 5.32843 16 4.5C16 3.67157 15.3284 3 14.5 3C13.6716 3 13 3.67157 13 4.5V6H11V4.5C11 3.67157 10.3284 3 9.5 3C8.67157 3 8 3.67157 8 4.5C8 5.32843 8.67157 6 9.5 6H11V11H3.5C2.11929 11 1 9.88071 1 8.5C1 7.11929 2.11929 6 3.5 6H6.33682C6.12085 5.54537 6 5.0368 6 4.5Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
