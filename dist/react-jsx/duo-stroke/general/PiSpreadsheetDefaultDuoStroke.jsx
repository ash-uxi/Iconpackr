import React from 'react';

/**
 * PiSpreadsheetDefaultDuoStroke icon from the duo-stroke style in general category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiSpreadsheetDefaultDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'spreadsheet-default icon',
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
      <path d="M14.5999 3H9.3999C7.15969 3 6.03958 3 5.18394 3.43597C4.43129 3.81947 3.81937 4.43139 3.43587 5.18404C3.02666 5.98717 3.00154 7.0233 3 9H8.9999H14.9999H20.9998C20.9983 7.0233 20.9731 5.98717 20.5639 5.18404C20.1804 4.43139 19.5685 3.81947 18.8159 3.43597C17.9602 3 16.8401 3 14.5999 3Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20.9999 15C21 14.8708 21 14.7375 21 14.6V9.4C21 9.26251 21 9.12925 20.9999 9H15M20.9999 15C20.9984 16.9767 20.9732 18.0128 20.564 18.816C20.1805 19.5686 19.5686 20.1805 18.816 20.564C18.0128 20.9732 16.9767 20.9984 15 20.9999M20.9999 15H15M15 15V9M15 15H9M15 15L15 20.9999M15 9H9M9 9L9 15M9 9H3.0001C3 9.12925 3 9.26251 3 9.4V14.6C3 14.7375 3 14.8708 3.0001 15M9 15L9 20.9999M9 15H3.0001M9 20.9999C9.12925 21 9.26251 21 9.4 21H14.6C14.7375 21 14.8708 21 15 20.9999M9 20.9999C7.0233 20.9984 5.98717 20.9732 5.18404 20.564C4.43139 20.1805 3.81947 19.5686 3.43597 18.816C3.02676 18.0128 3.00164 16.9767 3.0001 15" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
