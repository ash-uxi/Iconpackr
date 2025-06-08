import React from 'react';

/**
 * PiFilterFunnelDuoSolid icon from the duo-solid style in general category.
 */
interface PiFilterFunnelDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilterFunnelDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'filter-funnel icon',
  ...props
}: PiFilterFunnelDuoSolidProps): JSX.Element {
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
      <path d="m14.293 12.707 5.414-5.414A1 1 0 0 0 20 6.586V4H4v2.586a1 1 0 0 0 .293.707l5.414 5.414" /> <path fill={color || "currentColor"} d="M4 3a1 1 0 0 0-1 1v2.586A2 2 0 0 0 3.586 8L9 13.414V18a1 1 0 0 0 .4.8l4 3A1 1 0 0 0 15 21v-7.586L20.414 8A2 2 0 0 0 21 6.586V4a1 1 0 0 0-1-1z" opacity=".28" />
    </svg>
  );
}
