import React from 'react';

/**
 * PiChartCandlestickContrast icon from the contrast style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiChartCandlestickContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'chart-candlestick icon',
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
    <path d="M12.5 6A1.5 1.5 0 0 1 14 7.5v9a1.5 1.5 0 0 1-1.5 1.5h-1a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 11.5 6h1M21 8.5A1.5 1.5 0 0 0 19.5 7h-1A1.5 1.5 0 0 0 17 8.5v4a1.5 1.5 0 0 0 1.5 1.5h1a1.5 1.5 0 0 0 1.5-1.5zM7 11.5A1.5 1.5 0 0 0 5.5 10h-1A1.5 1.5 0 0 0 3 11.5v4A1.5 1.5 0 0 0 4.5 17h1A1.5 1.5 0 0 0 7 15.5z"/>
  </g>
  <path d="M12 18h.5a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 12.5 6H12m0 12h-.5a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 11.5 6h.5m0 12v3m0-15V3m7 4h.5A1.5 1.5 0 0 1 21 8.5v4a1.5 1.5 0 0 1-1.5 1.5H19m0-7h-.5A1.5 1.5 0 0 0 17 8.5v4a1.5 1.5 0 0 0 1.5 1.5h.5m0-7V4m0 10v3M5 10h.5A1.5 1.5 0 0 1 7 11.5v4A1.5 1.5 0 0 1 5.5 17H5m0-7h-.5A1.5 1.5 0 0 0 3 11.5v4A1.5 1.5 0 0 0 4.5 17H5m0-7V7m0 10v3"/>
    </svg>
  );
}
