import React from 'react';

/**
 * PiSearchDefaultZoomOutContrast icon from the contrast style in general category.
 */
interface PiSearchDefaultZoomOutContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultZoomOutContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default-zoom-out icon',
  ...props
}: PiSearchDefaultZoomOutContrastProps): JSX.Element {
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
      <path d="M14.95 14.95a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9m0 0L21 21M7.001 10h6"/>
  <path fill="currentColor" d="M17 10a6.98 6.98 0 0 1-2.05 4.95A7 7 0 1 1 17 10" opacity=".28"/>
    </svg>
  );
}
