import React from 'react';

/**
 * PiSearchDefaultZoomInDuoSolid icon from the duo-solid style in general category.
 */
interface PiSearchDefaultZoomInDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultZoomInDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default-zoom-in icon',
  ...props
}: PiSearchDefaultZoomInDuoSolidProps): JSX.Element {
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
      <path d="M10 13v-3m0 0V7m0 3H7m3 0h3" /> <path fill={color || "currentColor"} d="M10 2a8 8 0 1 0 4.906 14.32l5.387 5.387a1 1 0 0 0 1.414-1.414l-5.387-5.387A8 8 0 0 0 10 2" opacity=".28" />
    </svg>
  );
}
