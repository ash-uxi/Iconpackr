import React from 'react';

/**
 * PiChevronUpSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiChevronUpSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronUpSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-up icon',
  ...props
}: PiChevronUpSolidProps): JSX.Element {
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
      <path d="M12.925 9.32681C14.3879 10.5043 15.6927 11.8765 16.8055 13.4074C16.9425 13.5934 17.0161 13.8275 16.9972 14.0759C16.9553 14.6266 16.4749 15.039 15.9242 14.9971C13.3119 14.7983 10.6882 14.7983 8.07593 14.9971C7.52524 15.039 7.04484 14.6266 7.00293 14.0759C6.98403 13.8275 7.05757 13.5934 7.19456 13.4074C8.30737 11.8765 9.61223 10.5044 11.0751 9.32681C11.6165 8.89106 12.3836 8.89106 12.925 9.32681Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
