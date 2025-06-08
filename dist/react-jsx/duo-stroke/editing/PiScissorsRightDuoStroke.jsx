import React from 'react';

/**
 * PiScissorsRightDuoStroke icon from the duo-stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiScissorsRightDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'scissors-right icon',
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
      <path d="M10.2002 5.99978C10.2002 6.95459 9.82095 7.8703 9.1458 8.54545C8.47064 9.22061 7.55494 9.59991 6.60012 9.59991C5.64531 9.59991 4.72961 9.22061 4.05445 8.54545C3.3793 7.8703 3 6.95459 3 5.99978C3 5.04497 3.3793 4.12926 4.05445 3.45411C4.72961 2.77896 5.64531 2.39966 6.60012 2.39966C7.55494 2.39966 8.47064 2.77896 9.1458 3.45411C9.82095 4.12926 10.2002 5.04497 10.2002 5.99978Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21.0002 20.3995L12.6006 11.9999M12.6006 11.9999L21.0002 3.60034M12.6006 11.9999L9.146 15.4545M12.6006 11.9999L9.146 8.54529" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.60012 14.4003C7.55494 14.4003 8.47064 14.7796 9.1458 15.4547C9.82095 16.1299 10.2002 17.0456 10.2002 18.0004C10.2002 18.9552 9.82095 19.8709 9.1458 20.546C8.47064 21.2212 7.55494 21.6005 6.60012 21.6005C5.64531 21.6005 4.72961 21.2212 4.05445 20.546C3.3793 19.8709 3 18.9552 3 18.0004C3 17.0456 3.3793 16.1299 4.05445 15.4547C4.72961 14.7796 5.64531 14.4003 6.60012 14.4003Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
