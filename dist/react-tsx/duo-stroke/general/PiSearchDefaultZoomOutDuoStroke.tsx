import React from 'react';

/**
 * PiSearchDefaultZoomOutDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSearchDefaultZoomOutDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchDefaultZoomOutDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'search-default-zoom-out icon',
  ...props
}: PiSearchDefaultZoomOutDuoStrokeProps): JSX.Element {
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
      <path d="M14.9497 14.9497C16.2165 13.683 17 11.933 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17C11.933 17 13.683 16.2165 14.9497 14.9497ZM14.9497 14.9497L21 21" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M7.00098 10H13.001" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
