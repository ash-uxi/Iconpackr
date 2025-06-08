import React from 'react';

/**
 * PiArrowLeftUpDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiArrowLeftUpDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiArrowLeftUpDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'arrow-left-up icon',
  ...props
}: PiArrowLeftUpDuoStrokeProps): JSX.Element {
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
      <path d="M5.74331 14.2286C5.35593 11.6413 5.30505 9.0205 5.59114 6.43163C5.61568 6.20955 5.71476 6.0117 5.86323 5.86323C6.0117 5.71476 6.20955 5.61568 6.43163 5.59114C9.0205 5.30505 11.6413 5.35593 14.2286 5.74331" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M5.86328 5.86316L18.5912 18.5911" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
