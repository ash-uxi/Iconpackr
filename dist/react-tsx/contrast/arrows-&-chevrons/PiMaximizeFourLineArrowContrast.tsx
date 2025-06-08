import React from 'react';

/**
 * PiMaximizeFourLineArrowContrast icon from the contrast style in arrows-&-chevrons category.
 */
interface PiMaximizeFourLineArrowContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMaximizeFourLineArrowContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'maximize-four-line-arrow icon',
  ...props
}: PiMaximizeFourLineArrowContrastProps): JSX.Element {
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
    <path d="M3.073 3.544A17.3 17.3 0 0 0 3.24 8l.797-.952a24 24 0 0 1 3.01-3.01L8 3.24a17.3 17.3 0 0 0-4.456-.167.52.52 0 0 0-.471.471M20.76 8c.248-1.482.304-2.98.167-4.456a.52.52 0 0 0-.471-.471A17.3 17.3 0 0 0 16 3.24l.953.797c1.09.912 2.098 1.92 3.01 3.01zM16 20.76c1.482.248 2.98.304 4.456.167a.52.52 0 0 0 .471-.471c.137-1.476.08-2.974-.168-4.456l-.796.953a24 24 0 0 1-3.01 3.01zM3.24 16a17.3 17.3 0 0 0-.167 4.456.52.52 0 0 0 .471.471c1.476.137 2.974.08 4.456-.168l-.952-.796a24 24 0 0 1-3.01-3.01z"/>
  </g>
  <path d="m15 15 3.524 3.524M9 9 5.475 5.475M9 15l-3.525 3.524M15 9l3.524-3.525m0 13.05a24 24 0 0 1-1.572 1.438l-.952.796c1.482.249 2.98.305 4.456.168a.52.52 0 0 0 .471-.471c.137-1.476.08-2.974-.168-4.456l-.796.953a24 24 0 0 1-1.439 1.572m0-13.05a24 24 0 0 1 1.439 1.573l.796.952c.249-1.482.305-2.98.168-4.456a.52.52 0 0 0-.471-.471A17.3 17.3 0 0 0 16 3.24l.953.797a24 24 0 0 1 1.572 1.438m-13.049 0a24 24 0 0 0-1.438 1.573L3.24 8a17.3 17.3 0 0 1-.167-4.456.52.52 0 0 1 .471-.471A17.3 17.3 0 0 1 8 3.24l-.952.797a24 24 0 0 0-1.573 1.438m0 13.05a24 24 0 0 1-1.438-1.572L3.24 16a17.3 17.3 0 0 0-.167 4.456.52.52 0 0 0 .471.471c1.476.137 2.974.08 4.456-.168l-.952-.796a24 24 0 0 1-1.573-1.439"/>
    </svg>
  );
}
