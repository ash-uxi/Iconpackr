import React from 'react';

/**
 * PiScissorsRightStroke icon from the stroke style in editing category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiScissorsRightStroke({ 
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
      <path d="M21 20.3996L12.6004 12M12.6004 12L21 3.60042M12.6004 12L9.14575 15.4546M12.6004 12L9.14575 8.54537M9.14575 15.4546C8.4706 14.7795 7.55494 14.4003 6.60012 14.4003C5.64531 14.4003 4.72961 14.7796 4.05445 15.4547C3.3793 16.1299 3 17.0456 3 18.0004C3 18.9552 3.3793 19.8709 4.05445 20.546C4.72961 21.2212 5.64531 21.6005 6.60012 21.6005C7.55494 21.6005 8.47064 21.2212 9.1458 20.546C9.82095 19.8709 10.2002 18.9552 10.2002 18.0004C10.2002 17.0456 9.82091 16.1298 9.14575 15.4546ZM9.14575 8.54537C9.82091 7.87022 10.2002 6.95459 10.2002 5.99978C10.2002 5.04497 9.82095 4.12926 9.1458 3.45411C8.47064 2.77896 7.55494 2.39966 6.60012 2.39966C5.64531 2.39966 4.72961 2.77896 4.05445 3.45411C3.3793 4.12926 3 5.04497 3 5.99978C3 6.95459 3.3793 7.8703 4.05445 8.54545C4.72961 9.22061 5.64531 9.59991 6.60012 9.59991C7.55494 9.59991 8.4706 9.22053 9.14575 8.54537Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
