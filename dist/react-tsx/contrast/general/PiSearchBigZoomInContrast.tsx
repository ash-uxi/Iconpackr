import React from 'react';

/**
 * PiSearchBigZoomInContrast icon from the contrast style in general category.
 */
interface PiSearchBigZoomInContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchBigZoomInContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'search-big-zoom-in icon',
  ...props
}: PiSearchBigZoomInContrastProps): JSX.Element {
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
      <path d="M17.51 17.51A8.5 8.5 0 1 0 5.49 5.49a8.5 8.5 0 0 0 12.02 12.02m0 0L21 21m-9.5-6.5v-3m0 0v-3m0 3h-3m3 0h3"/>
  <path fill="currentColor" d="M20 11.5a8.5 8.5 0 1 1-17 0 8.5 8.5 0 0 1 17 0" opacity=".28"/>
    </svg>
  );
}
