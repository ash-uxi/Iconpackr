import React from 'react';

/**
 * PiDatabaseDuoStroke icon from the duo-stroke style in development category.
 */
interface PiDatabaseDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDatabaseDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'database icon',
  ...props
}: PiDatabaseDuoStrokeProps): JSX.Element {
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
      <path d="M16 17H16.01M20 12V18.1312C20 19.7156 16.4183 21 12 21C7.58172 21 4 19.7156 4 18.1312V12C4 13.4912 7.58172 14.7 12 14.7C16.4183 14.7 20 13.4912 20 12Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20 5.7V12C20 13.4912 16.4183 14.7 12 14.7C7.58172 14.7 4 13.4912 4 12V5.7M20 5.7C20 7.19117 16.4183 8.4 12 8.4C7.58172 8.4 4 7.19117 4 5.7M20 5.7C20 4.20883 16.4183 3 12 3C7.58172 3 4 4.20883 4 5.7M16 11H16.01" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
