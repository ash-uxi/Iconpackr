import React from 'react';

/**
 * PiPiechart01DuoSolid icon from the duo-solid style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiPiechart01DuoSolid({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'piechart-01 icon',
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
      <path d="M11.0437 4.26908C11.0437 3.01569 12.0969 1.80706 13.5438 2.02392C17.8907 2.67546 21.3245 6.10919 21.976 10.4562C22.1929 11.903 20.9842 12.9562 19.7308 12.9562H13.4003C12.0988 12.9562 11.0437 11.9011 11.0437 10.5997V4.26908Z" fill={color || "currentColor"} /> <path d="M7.26315 3.12128C8.30908 2.55426 9.42622 3.38332 9.42622 4.42919V10.5737C9.42622 12.7829 11.2171 14.5737 13.4262 14.5737H19.5708C20.6166 14.5737 21.4457 15.6909 20.8787 16.7368C19.1805 19.8693 15.8617 22 12.0437 22C6.49672 22 2 17.5032 2 11.9563C2 8.13829 4.1307 4.81944 7.26315 3.12128Z" fill={color || "currentColor"} opacity="0.28" />
    </svg>
  );
}
