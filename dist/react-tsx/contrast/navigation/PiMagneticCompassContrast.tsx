import React from 'react';

/**
 * PiMagneticCompassContrast icon from the contrast style in navigation category.
 */
interface PiMagneticCompassContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMagneticCompassContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'magnetic-compass icon',
  ...props
}: PiMagneticCompassContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
  <path d="M9.587 15.498a6.33 6.33 0 0 0 5.91-5.91 1.02 1.02 0 0 0-1.085-1.086 6.33 6.33 0 0 0-5.91 5.91c-.04.616.47 1.125 1.085 1.086"/>
    </svg>
  );
}
