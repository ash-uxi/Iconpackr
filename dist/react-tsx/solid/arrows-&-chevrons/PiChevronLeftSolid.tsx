import React from 'react';

/**
 * PiChevronLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-left icon',
  ...props
}: PiChevronLeftSolidProps): JSX.Element {
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
      <path d="M9.32681 12.925C10.5043 14.3879 11.8765 15.6927 13.4074 16.8055C13.5934 16.9425 13.8275 17.0161 14.0759 16.9972C14.6266 16.9553 15.039 16.4749 14.9971 15.9242C14.7983 13.3119 14.7983 10.6882 14.9971 8.07593C15.039 7.52524 14.6266 7.04484 14.0759 7.00293C13.8275 6.98403 13.5934 7.05757 13.4074 7.19456C11.8765 8.30737 10.5044 9.61223 9.32681 11.0751C8.89106 11.6165 8.89106 12.3836 9.32681 12.925Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
