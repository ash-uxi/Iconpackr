import React from 'react';

/**
 * PiGraphChartRadarContrast icon from the contrast style in chart-&-graph category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiGraphChartRadarContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'graph-chart-radar icon',
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
      <path d="M12 3.001v5.976m0 0 3.756 2.307M12 8.977l-3.756 2.307M2.857 9.601l5.387 1.683m0 0L10.189 15m10.954-5.399-5.387 1.683m0 0L15.236 17m2.436 3.42L15.236 17m0 0-5.047-2m-3.861 5.42 3.86-5.42"/>
  <path fill="currentColor" d="m3.987 8.114 6.19-4.498a3.1 3.1 0 0 1 3.645 0l6.19 4.498a3.1 3.1 0 0 1 1.127 3.466l-2.365 7.278A3.1 3.1 0 0 1 15.826 21H8.174a3.1 3.1 0 0 1-2.948-2.142L2.86 11.58a3.1 3.1 0 0 1 1.126-3.466" opacity=".28"/>
  <path d="m3.987 8.114 6.19-4.498a3.1 3.1 0 0 1 3.645 0l6.19 4.498a3.1 3.1 0 0 1 1.127 3.466l-2.365 7.278A3.1 3.1 0 0 1 15.826 21H8.174a3.1 3.1 0 0 1-2.948-2.142L2.86 11.58a3.1 3.1 0 0 1 1.126-3.466"/>
    </svg>
  );
}
