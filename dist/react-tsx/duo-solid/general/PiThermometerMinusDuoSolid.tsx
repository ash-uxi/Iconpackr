import React from 'react';

/**
 * PiThermometerMinusDuoSolid icon from the duo-solid style in general category.
 */
interface PiThermometerMinusDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiThermometerMinusDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'thermometer-minus icon',
  ...props
}: PiThermometerMinusDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M15 17a1 1 0 1 0 0 2 1 1 0 0 0 0-2m0 0v-7" /> <path fill={color || "currentColor"} d="M15 1a4 4 0 0 1 4 4v10a5 5 0 1 1-8 0V5a4 4 0 0 1 4-4" opacity=".28" /> <path d="M2 7h6" />
    </svg>
  );
}
