import React from 'react';

/**
 * PiAnnotationDefaultStroke icon from the stroke style in communication category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiAnnotationDefaultStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'annotation-default icon',
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
      <path d="M2.5083 9.07952C2.5083 6.95149 2.5083 5.88748 2.92244 5.07467C3.28673 4.35971 3.86801 3.77843 4.58297 3.41414C5.39578 3 6.45979 3 8.58783 3H15.4273C17.5553 3 18.6193 3 19.4321 3.41414C20.1471 3.77843 20.7284 4.35971 21.0927 5.07467C21.5068 5.88748 21.5068 6.95149 21.5068 9.07952V13.6394C21.5068 14.3452 21.5068 14.698 21.4601 14.9933C21.2026 16.6193 19.9273 17.8946 18.3013 18.1521C17.7316 18.2423 17.1526 18.1539 16.5816 18.207C16.1082 18.251 15.6685 18.4709 15.3494 18.8233C15.0149 19.1925 14.7382 19.6249 14.4398 20.023C13.6147 21.1236 13.2022 21.674 12.6964 21.8707C12.2533 22.0431 11.7618 22.0431 11.3188 21.8707C10.8129 21.674 10.4004 21.1236 9.57532 20.023C9.27693 19.6249 9.00022 19.1925 8.66576 18.8233C8.3466 18.4709 7.90693 18.251 7.43355 18.207C6.86257 18.1539 6.28347 18.2423 5.71381 18.1521C4.08778 17.8946 2.81249 16.6193 2.55505 14.9933C2.5083 14.698 2.5083 14.3452 2.5083 13.6394V9.07952Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
