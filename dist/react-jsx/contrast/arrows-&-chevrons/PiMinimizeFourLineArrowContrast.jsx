import React from 'react';

/**
 * PiMinimizeFourLineArrowContrast icon from the contrast style in arrows-&-chevrons category.
 * @param {Object} props - Component props
 * @param {number} [props.size=24] - Icon size
 * @param {string} [props.color] - Icon color
 * @param {string} [props.className] - Additional CSS class
 * @param {string} [props.ariaLabel] - Accessibility label
 */
export default function PiMinimizeFourLineArrowContrast({ 
  size = 24, 
  color,
  className,
  ariaLabel = 'minimize-four-line-arrow icon',
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
    <path d="M15.544 15.073A17.3 17.3 0 0 1 20 15.24l-.949.793a24 24 0 0 0-3.017 3.018L15.24 20a17.3 17.3 0 0 1-.168-4.456.52.52 0 0 1 .471-.471M15.073 8.456A17.3 17.3 0 0 1 15.24 4l.793.949a24 24 0 0 0 3.017 3.017L20 8.76c-1.482.248-2.98.304-4.456.167a.52.52 0 0 1-.471-.471M8.927 8.456C9.064 6.98 9.007 5.482 8.76 4l-.794.949A24 24 0 0 1 4.95 7.966L4 8.76c1.482.248 2.98.304 4.456.167a.52.52 0 0 0 .471-.471M8.927 15.544c.137 1.476.08 2.974-.167 4.456l-.794-.949a24 24 0 0 0-3.017-3.017L4 15.24a17.3 17.3 0 0 1 4.456-.168.52.52 0 0 1 .471.471"/>
  </g>
  <path d="m21 21-3.524-3.524M3 3l3.525 3.525M3 21l3.525-3.525M21 3l-3.525 3.525m0 0a24 24 0 0 1-1.441-1.576L15.24 4a17.3 17.3 0 0 0-.168 4.456.52.52 0 0 0 .471.471c1.476.137 2.974.08 4.456-.167l-.949-.794a24 24 0 0 1-1.576-1.441m-10.95 0a24 24 0 0 0 1.441-1.576L8.76 4c.248 1.482.304 2.98.167 4.456a.52.52 0 0 1-.471.471C6.98 9.064 5.482 9.007 4 8.76l.949-.794a24 24 0 0 0 1.576-1.441m0 10.95q.755.757 1.441 1.576L8.76 20c.248-1.482.304-2.98.167-4.456a.52.52 0 0 0-.471-.471A17.3 17.3 0 0 0 4 15.24l.949.793q.82.686 1.576 1.441m10.95 0q.757-.755 1.576-1.441l.949-.793a17.3 17.3 0 0 0-4.456-.168.52.52 0 0 0-.471.471A17.3 17.3 0 0 0 15.24 20l.793-.948q.686-.821 1.442-1.576"/>
    </svg>
  );
}
