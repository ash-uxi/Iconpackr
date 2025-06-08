import React from 'react';

/**
 * PiWaterTripleDropletContrast icon from the contrast style in weather category.
 */
interface PiWaterTripleDropletContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWaterTripleDropletContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'water-triple-droplet icon',
  ...props
}: PiWaterTripleDropletContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M12 2.056c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333m-6 10.21C12.262 17.97 8.752 21.6 6 21.6s-6.262-3.63 0-9.333m12 0c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333" opacity=".28"/>
  <path d="M12 2.056c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333m-6 10.21C12.262 17.97 8.752 21.6 6 21.6s-6.262-3.63 0-9.333m12 0c6.262 5.703 2.752 9.333 0 9.333s-6.262-3.63 0-9.333"/>
    </svg>
  );
}
