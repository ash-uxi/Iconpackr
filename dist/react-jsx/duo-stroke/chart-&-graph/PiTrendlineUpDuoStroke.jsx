import React from 'react';

/**
 * PiTrendlineUpDuoStroke icon from the duo-stroke style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiTrendlineUpDuoStroke({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'trendline-up icon',
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
      <path d="M2 16.852L2.72917 15.9145C4.52868 13.6009 6.77699 11.6745 9.33921 10.2511C9.65601 10.0751 10.0549 10.1718 10.2559 10.4733L13.4676 15.2908C13.6741 15.6006 14.1004 15.6698 14.3943 15.4412C16.9557 13.449 18.9953 10.865 20.338 7.91094L20.6593 7.2041" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M22.0001 11.8256C21.819 10.3224 21.4412 8.85011 20.8768 7.44635C20.8338 7.33942 20.7555 7.25523 20.6594 7.20386C20.5725 7.15742 20.471 7.13782 20.3679 7.15249C18.87 7.36561 17.406 7.77459 16.0137 8.36934" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
