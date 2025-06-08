import React from 'react';

/**
 * PiSnowflakeDuoStroke icon from the duo-stroke style in weather category.
 */
interface PiSnowflakeDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSnowflakeDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'snowflake icon',
  ...props
}: PiSnowflakeDuoStrokeProps): JSX.Element {
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
      <path d="M11.9999 6V12M11.9999 12V18M11.9999 12L17.196 9M11.9999 12L6.80371 15M11.9999 12L6.80371 9.00005M11.9999 12L17.196 15.0001" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.00028 3L12.0003 6L15.0003 3M15.0003 21L12.0003 18L9.00028 21M18.2945 4.90192L17.1964 9L21.2945 10.0981M5.70605 19.0981L6.80413 15L2.70605 13.9019M2.70605 10.0981L6.80413 9.00005L5.70605 4.90198M21.2945 13.902L17.1964 15.0001L18.2945 19.0981" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
