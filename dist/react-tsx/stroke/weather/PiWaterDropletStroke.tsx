import React from 'react';

/**
 * PiWaterDropletStroke icon from the stroke style in weather category.
 */
interface PiWaterDropletStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterDropletStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'water-droplet icon',
  ...props
}: PiWaterDropletStrokeProps): JSX.Element {
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
      <path d="M12.0001 3C25.0001 14 17.7121 21 12.0001 21C6.28813 21 -0.999873 14 12.0001 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
