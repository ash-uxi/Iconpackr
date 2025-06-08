import React from 'react';

/**
 * PiGaugeLeftDownDuoSolid icon from the duo-solid style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGaugeLeftDownDuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'gauge-left-down icon',
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
      <path d="M12.0001 1.8501C6.3941 1.8501 1.8501 6.3941 1.8501 12.0001C1.8501 17.6051 6.3941 22.1501 12.0001 22.1501C17.6061 22.1501 22.1501 17.6051 22.1501 12.0001C22.1501 6.3941 17.6061 1.8501 12.0001 1.8501Z" fill={color || "currentColor"} opacity="0.28" fillRule="evenodd" clipRule="evenodd" /> <path d="M6.99959 16.0747C6.98252 15.8346 7.05264 15.5964 7.19707 15.4038L10.6651 10.7808C10.822 10.5716 11.022 10.3986 11.2515 10.2734C11.4811 10.1483 11.7349 10.0739 11.9957 10.0554C12.2565 10.0368 12.5183 10.0746 12.7632 10.166C13.0082 10.2574 13.2307 10.4004 13.4155 10.5853C13.6004 10.7702 13.7434 10.9927 13.8349 11.2376C13.9263 11.4826 13.964 11.7443 13.9455 12.0052C13.9269 12.266 13.8526 12.5198 13.7274 12.7493C13.6023 12.9789 13.4292 13.1789 13.2201 13.3358L8.59707 16.8038C8.4045 16.9482 8.16629 17.0183 7.92618 17.0013C7.68607 16.9842 7.46018 16.8811 7.28996 16.7109C7.11975 16.5407 7.01665 16.3148 6.99959 16.0747Z" fill={color || "currentColor"} />
    </svg>
  );
}
