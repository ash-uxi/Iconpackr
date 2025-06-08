import React from 'react';

/**
 * PiSlackContrast icon from the contrast style in apps-&-social category.
 */
interface PiSlackContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSlackContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'slack icon',
  ...props
}: PiSlackContrastProps): JSX.Element {
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
    <path d="M13 3.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0zM8 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0zM15.5 16a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3zM22 8.5a1.5 1.5 0 0 1-1.5 1.5H20a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 1 3 0M8.5 2A1.5 1.5 0 0 1 10 3.5V4a1 1 0 0 1-1 1h-.5a1.5 1.5 0 1 1 0-3M2 15.5A1.5 1.5 0 0 1 3.5 14H4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 1-3 0M15.5 22a1.5 1.5 0 0 1-1.5-1.5V20a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 0 3M3.5 11a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 1 1 0 3z"/>
  </g>
  <path d="M13 3.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0zM15.5 16a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 0 1 0 3zM15.5 22a1.5 1.5 0 0 1-1.5-1.5V20a1 1 0 0 1 1-1h.5a1.5 1.5 0 0 1 0 3M2 15.5A1.5 1.5 0 0 1 3.5 14H4a1 1 0 0 1 1 1v.5a1.5 1.5 0 0 1-3 0M22 8.5a1.5 1.5 0 0 1-1.5 1.5H20a1 1 0 0 1-1-1v-.5a1.5 1.5 0 0 1 3 0M3.5 11a1.5 1.5 0 0 1 0-3h5a1.5 1.5 0 1 1 0 3zM8 15.5a1.5 1.5 0 0 1 3 0v5a1.5 1.5 0 0 1-3 0zM8.5 2A1.5 1.5 0 0 1 10 3.5V4a1 1 0 0 1-1 1h-.5a1.5 1.5 0 1 1 0-3"/>
    </svg>
  );
}
