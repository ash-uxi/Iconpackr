import React from 'react';

/**
 * PiAnimation02Solid icon from the solid style in media category.
 */
interface PiAnimation02SolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAnimation02Solid({
  size = 24,
  color,
  className,
  ariaLabel = 'animation-02 icon',
  ...props
}: PiAnimation02SolidProps): JSX.Element {
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
      <path d="M12.6553 10.7303C13.1569 10.4992 13.376 9.90513 13.1449 9.40357C12.9137 8.902 12.3196 8.68283 11.8181 8.91402C9.2794 10.0842 7.31329 12.2884 6.46157 14.9881C5.36327 13.7675 3.77127 13 2 13C1.44772 13 1 13.4477 1 14C1 14.5523 1.44772 15 2 15C4.20914 15 6 16.7909 6 19C6 19.5523 6.44772 20 7 20C7.55228 20 8 19.5523 8 19V18C8 14.7775 9.90537 11.9979 12.6553 10.7303Z" fill="currentColor" stroke="none"/>
  <path d="M19 4C16.7909 4 15 5.79086 15 8C15 10.2091 16.7909 12 19 12C21.2091 12 23 10.2091 23 8C23 5.79086 21.2091 4 19 4Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
