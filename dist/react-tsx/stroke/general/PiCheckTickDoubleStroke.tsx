import React from 'react';

/**
 * PiCheckTickDoubleStroke icon from the stroke style in general category.
 */
interface PiCheckTickDoubleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCheckTickDoubleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'check-tick-double icon',
  ...props
}: PiCheckTickDoubleStrokeProps): JSX.Element {
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
      <path d="M2.60547 11.7812L7.1292 17.0048L7.50331 16.3507C7.9736 15.5283 8.48622 14.7335 9.03848 13.9692C10.8417 11.4735 13.0675 9.30272 15.6219 7.55842L16.4468 6.99512M21.553 7.60879L20.6832 8.09987C17.1647 10.0862 14.143 12.8455 11.846 16.1695L11.4176 16.7895L11.1202 16.437" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
