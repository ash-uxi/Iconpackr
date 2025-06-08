import React from 'react';

/**
 * PiUturnUpSolid icon from the solid style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiUturnUpSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'uturn-up icon',
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
      <path d="M15 15C15 17.2091 13.2091 19 11 19C8.79086 19 7 17.2091 7 15V12C7 11.4477 6.55229 11 6 11C5.44772 11 5 11.4477 5 12V15C5 18.3137 7.68629 21 11 21C14.3137 21 17 18.3137 17 15V8.81682C17.2302 8.82684 17.4603 8.84032 17.6903 8.85726L20.0098 9.02819C20.3983 9.05681 20.768 8.85731 20.9573 8.51693C21.1466 8.17654 21.121 7.75722 20.8918 7.44234C19.7827 5.91889 18.4865 4.5498 17.0356 3.36919C16.7361 3.12546 16.3695 3 16 3C15.6305 3 15.2639 3.12546 14.9644 3.36919C13.5135 4.5498 12.2173 5.91889 11.1082 7.44234C10.879 7.75722 10.8534 8.17654 11.0427 8.51693C11.232 8.85731 11.6017 9.05681 11.9902 9.02819L14.3097 8.85726C14.5397 8.84032 14.7698 8.82684 15 8.81682V15Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
