import React from 'react';

/**
 * PiFilterFunnelStroke icon from the stroke style in general category.
 */
interface PiFilterFunnelStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFilterFunnelStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'filter-funnel icon',
  ...props
}: PiFilterFunnelStrokeProps): JSX.Element {
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
      <path d="M20 4H4V6.58579C4 6.851 4.10536 7.10536 4.29289 7.29289L9.70711 12.7071C9.89464 12.8946 10 13.149 10 13.4142V18L14 21V13.4142C14 13.149 14.1054 12.8946 14.2929 12.7071L19.7071 7.29289C19.8946 7.10536 20 6.851 20 6.58579V4Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
