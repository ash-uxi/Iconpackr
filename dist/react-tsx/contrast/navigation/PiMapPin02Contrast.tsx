import React from 'react';

/**
 * PiMapPin02Contrast icon from the contrast style in navigation category.
 */
interface PiMapPin02ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMapPin02Contrast({
  size = 24,
  color,
  className,
  ariaLabel = 'map-pin-02 icon',
  ...props
}: PiMapPin02ContrastProps): JSX.Element {
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
      <path d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m0 0v8"/>
  <path fill="currentColor" d="M17 8A5 5 0 1 1 7 8a5 5 0 0 1 10 0" opacity=".28"/>
    </svg>
  );
}
