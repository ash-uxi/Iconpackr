import React from 'react';

/**
 * PiYCombinatorHackerNewsStroke icon from the stroke style in apps-&-social category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiYCombinatorHackerNewsStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'y-combinator-hacker-news icon',
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
      <path d="M8.5 8L12 13.3467M12 13.3467L15.5 8M12 13.3467V17M13.6 20H10.4C8.15979 20 7.03969 20 6.18404 19.564C5.43139 19.1805 4.81947 18.5686 4.43597 17.816C4 16.9603 4 15.8402 4 13.6V10.4C4 8.15979 4 7.03969 4.43597 6.18404C4.81947 5.43139 5.43139 4.81947 6.18404 4.43597C7.03969 4 8.15979 4 10.4 4H13.6C15.8402 4 16.9603 4 17.816 4.43597C18.5686 4.81947 19.1805 5.43139 19.564 6.18404C20 7.03969 20 8.15979 20 10.4V13.6C20 15.8402 20 16.9603 19.564 17.816C19.1805 18.5686 18.5686 19.1805 17.816 19.564C16.9603 20 15.8402 20 13.6 20Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
