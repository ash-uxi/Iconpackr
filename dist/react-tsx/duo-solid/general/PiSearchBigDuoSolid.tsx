import React from 'react';

/**
 * PiSearchBigDuoSolid icon from the duo-solid style in general category.
 */
interface PiSearchBigDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchBigDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'search-big icon',
  ...props
}: PiSearchBigDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M11.5 2a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19" /> <path d="M17.51 17.51 21 21" opacity=".28" />
    </svg>
  );
}
