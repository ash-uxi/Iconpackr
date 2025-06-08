import React from 'react';

/**
 * PiGraphChartCandlestickContrast icon from the contrast style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphChartCandlestickContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-chart-candlestick icon',
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
      <g fill="currentColor" opacity=".28">
    <path d="M7 11c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 9 8.536 9 9 9s.697 0 .888.051a1.5 1.5 0 0 1 1.06 1.06c.052.191.052.424.052.889v2c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C9.696 15 9.464 15 9 15s-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 13.697 7 13.464 7 13zM15 7c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C16.303 5 16.536 5 17 5s.698 0 .888.051a1.5 1.5 0 0 1 1.06 1.06C19 6.304 19 6.536 19 7v2c0 .465 0 .697-.051.888a1.5 1.5 0 0 1-1.06 1.06C17.697 11 17.464 11 17 11s-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C15 9.696 15 9.464 15 9z"/>
  </g>
  <path d="M21 21H7a4 4 0 0 1-4-4V3m6 3v3m0 8v-2m8-12v2m0 12v-6m-8 4c-.465 0-.697 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C7 13.697 7 13.464 7 13v-2c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C8.304 9 8.536 9 9 9m0 6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C11 13.697 11 13.464 11 13v-2c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C9.696 9 9.464 9 9 9m8 2c-.465 0-.698 0-.888-.051a1.5 1.5 0 0 1-1.06-1.06C15 9.696 15 9.464 15 9V7c0-.465 0-.697.051-.888a1.5 1.5 0 0 1 1.06-1.06C16.303 5 16.536 5 17 5m0 6c.465 0 .698 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C19 9.696 19 9.464 19 9V7c0-.465 0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C17.697 5 17.464 5 17 5"/>
    </svg>
  );
}
