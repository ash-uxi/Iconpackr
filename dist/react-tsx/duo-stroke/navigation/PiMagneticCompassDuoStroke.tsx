import React from 'react';

/**
 * PiMagneticCompassDuoStroke icon from the duo-stroke style in navigation category.
 */
interface PiMagneticCompassDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMagneticCompassDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'magnetic-compass icon',
  ...props
}: PiMagneticCompassDuoStrokeProps): JSX.Element {
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
      <path d="M11.9996 21.15C17.053 21.15 21.1496 17.0534 21.1496 12C21.1496 6.94657 17.053 2.84998 11.9996 2.84998C6.9462 2.84998 2.84961 6.94657 2.84961 12C2.84961 17.0534 6.9462 21.15 11.9996 21.15Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.58714 15.4978C12.7627 15.2928 15.2928 12.7627 15.4978 9.58714C15.5375 8.97223 15.0278 8.46247 14.4129 8.50217C11.2373 8.70724 8.70724 11.2373 8.50217 14.4129C8.46247 15.0278 8.97223 15.5375 9.58714 15.4978Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
