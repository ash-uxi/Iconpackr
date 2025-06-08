import React from 'react';

/**
 * PiPinDefaultStroke icon from the stroke style in general category.
 */
interface PiPinDefaultStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPinDefaultStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'pin-default icon',
  ...props
}: PiPinDefaultStrokeProps): JSX.Element {
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
      <path d="M12 21V15.6926M12 15.6926C9.79899 15.6926 7.61078 15.5089 5.43315 15.1978C5.18461 15.1623 5 14.9495 5 14.6984C5 13.108 5.83214 11.6335 7.19363 10.8115C7.82399 10.4309 8.22751 9.78342 8.04454 9.02442L7.05793 4.93181C6.82958 3.9846 7.49421 3.0551 8.46436 2.96485C10.83 2.74479 13.17 2.74479 15.5356 2.96485C16.5058 3.0551 17.1704 3.9846 16.9421 4.93181L15.9555 9.02442C15.7725 9.78342 16.176 10.4309 16.8064 10.8115C18.1679 11.6335 19 13.108 19 14.6984C19 14.9495 18.8154 15.1623 18.5669 15.1978C16.3892 15.5089 14.201 15.6926 12 15.6926Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
