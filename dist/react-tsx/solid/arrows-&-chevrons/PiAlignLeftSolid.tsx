import React from 'react';

/**
 * PiAlignLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiAlignLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'align-left icon',
  ...props
}: PiAlignLeftSolidProps): JSX.Element {
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
      <path d="M20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H12.8758C12.896 14.0018 12.9466 15.0031 13.0276 16.0026C13.0722 16.553 12.6621 17.0355 12.1117 17.0801C11.8614 17.1003 11.6252 17.0267 11.4379 16.8885C9.91621 15.7802 8.54864 14.4851 7.36919 13.0356C7.12546 12.7361 7 12.3695 7 12C7 11.6305 7.12546 11.2639 7.36919 10.9644C8.54864 9.51489 9.9162 8.21981 11.4379 7.11148C11.6252 6.97334 11.8614 6.89965 12.1117 6.91993C12.6621 6.96454 13.0722 7.44696 13.0276 7.99744C12.9466 8.99691 12.896 9.99822 12.8758 11H20Z" fill="currentColor" stroke="none"/>
  <path d="M5 19C5 19.5523 4.55228 20 4 20C3.44772 20 3 19.5523 3 19V5C3 4.44771 3.44772 4 4 4C4.55228 4 5 4.44771 5 5V19Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
