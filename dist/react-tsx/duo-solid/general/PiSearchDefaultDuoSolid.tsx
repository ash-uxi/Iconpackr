import React from 'react';

/**
 * PiSearchDefaultDuoSolid icon from the duo-solid style in general category.
 */
interface PiSearchDefaultDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default icon',
  ...props
}: PiSearchDefaultDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M10 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16" /> <path d="M14.95 14.95 21 21" opacity=".28" />
    </svg>
  );
}
