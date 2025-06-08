import React from 'react';

/**
 * PiSearchDefaultZoomInContrast icon from the contrast style in general category.
 */
interface PiSearchDefaultZoomInContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultZoomInContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default-zoom-in icon',
  ...props
}: PiSearchDefaultZoomInContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M17 10a6.98 6.98 0 0 1-2.05 4.95A7 7 0 1 1 17 10" opacity=".28"/>
  <path d="m21 21-6.05-6.05m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9M10 13v-3m0 0V7m0 3H7m3 0h3"/>
    </svg>
  );
}
