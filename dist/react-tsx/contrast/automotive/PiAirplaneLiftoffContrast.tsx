import React from 'react';

/**
 * PiAirplaneLiftoffContrast icon from the contrast style in automotive category.
 */
interface PiAirplaneLiftoffContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAirplaneLiftoffContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'airplane-liftoff icon',
  ...props
}: PiAirplaneLiftoffContrastProps): JSX.Element {
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
      <path d="M3 20h18M7.572 15.516l13.367-3.581a1 1 0 0 0 .707-1.225 3 3 0 0 0-3.674-2.121l-2.898.776-7.701-5.157a3 3 0 0 0-2.445-.406l-.618.165 4.968 6.951-2.897.777-3.129-1.059a1 1 0 0 0-.58-.018l-.673.18 2.294 3.474a3 3 0 0 0 3.28 1.244"/>
  <path fill="currentColor" d="m7.573 15.514 13.367-3.582a1 1 0 0 0 .707-1.224 3 3 0 0 0-3.674-2.121l-2.898.776-7.701-5.158A3 3 0 0 0 4.928 3.8l-.617.165 4.968 6.95-2.898.777-3.128-1.058a1 1 0 0 0-.58-.019l-.673.18 2.293 3.474a3 3 0 0 0 3.28 1.245" opacity=".28"/>
    </svg>
  );
}
