import React from 'react';

/**
 * PiListNumberStroke icon from the stroke style in general category.
 */
interface PiListNumberStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListNumberStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-number icon',
  ...props
}: PiListNumberStrokeProps): JSX.Element {
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
      <path d="M5 9.99978V4.75488C4.3236 4.92051 3.80674 5.38628 3.5 5.99976M7 18.9998H3.60797V18.4998C4.49018 17.8818 5.39421 17.2985 6.11723 16.4886C6.60019 15.9476 6.65362 15.138 6.13314 14.5942C5.71038 14.1526 4.9793 14.0078 4.41574 14.227C4.03522 14.375 3.81857 14.6715 3.60797 14.9998M21 5.99978H11M21 11.9998H11M21 17.9998H11" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
