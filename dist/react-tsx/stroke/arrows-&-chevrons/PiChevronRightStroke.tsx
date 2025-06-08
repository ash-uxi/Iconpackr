import React from 'react';

/**
 * PiChevronRightStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiChevronRightStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiChevronRightStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'chevron-right icon',
  ...props
}: PiChevronRightStrokeProps): JSX.Element {
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
      <path d="M10 8.13916C11.4619 9.20122 12.7713 10.4462 13.8942 11.8413C14.0353 12.0165 14.0353 12.2618 13.8942 12.437C12.7713 13.8321 11.4619 15.0771 10 16.1392" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
