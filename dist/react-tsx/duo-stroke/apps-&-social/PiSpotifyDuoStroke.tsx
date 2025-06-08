import React from 'react';

/**
 * PiSpotifyDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiSpotifyDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpotifyDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'spotify icon',
  ...props
}: PiSpotifyDuoStrokeProps): JSX.Element {
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
      <path d="M15.0494 15.8755C13.7988 15.313 12.4116 15 10.9514 15C9.92406 15 8.9329 15.1549 8 15.4427M16.2461 13.1235C14.6288 12.4014 12.837 12 10.9514 12C9.75643 12 8.5991 12.1612 7.5 12.4631M17.5 10.3972C15.5012 9.49941 13.2846 9 10.9514 9C9.5877 9 8.26384 9.17061 7 9.49165" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M2.8501 12.0001C2.8501 17.0535 6.94669 21.1501 12.0001 21.1501C17.0535 21.1501 21.1501 17.0535 21.1501 12.0001C21.1501 6.94669 17.0535 2.8501 12.0001 2.8501C6.94669 2.8501 2.8501 6.94669 2.8501 12.0001Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
