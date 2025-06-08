import React from 'react';

/**
 * PiWaterDropletContrast icon from the contrast style in weather category.
 */
interface PiWaterDropletContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterDropletContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'water-droplet icon',
  ...props
}: PiWaterDropletContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M12 3c13 11 5.712 18 0 18s-13-7 0-18" opacity=".28"/>
  <path d="M12 3c13 11 5.712 18 0 18s-13-7 0-18"/>
    </svg>
  );
}
