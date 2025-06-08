import React from 'react';

/**
 * PiGraphBarLineSankeyStroke icon from the stroke style in chart-&-graph category.
 */
interface PiGraphBarLineSankeyStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGraphBarLineSankeyStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'graph-bar-line-sankey icon',
  ...props
}: PiGraphBarLineSankeyStrokeProps): JSX.Element {
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
      <path d="M21 21H7C5.13616 21 3.57006 19.7252 3.12602 18M3 3V6M21 6H3M21 17H19.2815C16.6066 17 14.1088 15.6632 12.6251 13.4376L12.5294 13.2941M21 10H19C16.4819 10 14.1108 11.1856 12.6 13.2L12.5294 13.2941M3 6V8M3 8H4.71853C7.39336 8 9.89121 9.33681 11.3749 11.5624L12.5294 13.2941M3 8V17C3 17.3453 3.04375 17.6804 3.12602 18M12.5294 13.2941L11.4 14.8C9.88916 16.8144 7.51806 18 5 18H3.12602" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
