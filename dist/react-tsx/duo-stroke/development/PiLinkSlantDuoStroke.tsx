import React from 'react';

/**
 * PiLinkSlantDuoStroke icon from the duo-stroke style in development category.
 */
interface PiLinkSlantDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiLinkSlantDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'link-slant icon',
  ...props
}: PiLinkSlantDuoStrokeProps): JSX.Element {
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
      <path d="M10.5856 6.34296L11.2927 5.63585C13.2453 3.68323 16.4112 3.68323 18.3638 5.63585C20.3164 7.58847 20.3164 10.7543 18.3638 12.7069L17.6567 13.414M6.34296 10.5856L5.63585 11.2927C3.68323 13.2453 3.68323 16.4112 5.63585 18.3638C7.58847 20.3164 10.7543 20.3164 12.7069 18.3638L13.414 17.6567" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M14.1215 9.87891L9.87891 14.1215" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
