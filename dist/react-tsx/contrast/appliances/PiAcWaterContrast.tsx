import React from 'react';

/**
 * PiAcWaterContrast icon from the contrast style in appliances category.
 */
interface PiAcWaterContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcWaterContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-water icon',
  ...props
}: PiAcWaterContrastProps): JSX.Element {
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
    <path d="M20 4H4a2 2 0 0 0-2 2v6h20V6a2 2 0 0 0-2-2M19.8 19.2a2.8 2.8 0 1 1-5.6 0c0-1.546 2.1-4.2 2.8-4.2s2.8 2.654 2.8 4.2"/>
  </g>
  <path d="M18 8h-2m6 4V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6zm-2.2 7.2a2.8 2.8 0 1 1-5.6 0c0-1.546 2.1-4.2 2.8-4.2s2.8 2.654 2.8 4.2"/>
    </svg>
  );
}
