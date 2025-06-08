import React from 'react';

/**
 * PiSearchBigDuoStroke icon from the duo-stroke style in general category.
 */
interface PiSearchBigDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSearchBigDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'search-big icon',
  ...props
}: PiSearchBigDuoStrokeProps): JSX.Element {
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
      <path d="M17.5107 17.5107L21.0003 21.0003" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M20 11.5C20 16.1944 16.1944 20 11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
