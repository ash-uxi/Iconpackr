import React from 'react';

/**
 * PiPowerCircleStroke icon from the stroke style in general category.
 */
interface PiPowerCircleStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPowerCircleStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'power-circle icon',
  ...props
}: PiPowerCircleStrokeProps): JSX.Element {
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
      <path d="M12.0001 6.99961V11.9996M16.0008 9C16.6283 9.83559 17.0001 10.8742 17.0001 11.9996C17.0001 14.761 14.7615 16.9996 12.0001 16.9996C9.23867 16.9996 7.0001 14.761 7.0001 11.9996C7.0001 10.8742 7.37193 9.83559 7.99944 9M12.0001 21.1496C6.94669 21.1496 2.8501 17.053 2.8501 11.9996C2.8501 6.94621 6.94669 2.84961 12.0001 2.84961C17.0535 2.84961 21.1501 6.94621 21.1501 11.9996C21.1501 17.053 17.0535 21.1496 12.0001 21.1496Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
