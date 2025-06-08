import React from 'react';

/**
 * PiSpotifyContrast icon from the contrast style in apps-&-social category.
 */
interface PiSpotifyContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSpotifyContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'spotify icon',
  ...props
}: PiSpotifyContrastProps): JSX.Element {
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
      <path d="M15.05 15.876A10 10 0 0 0 10.95 15a10 10 0 0 0-2.95.443m8.245-2.32A12.95 12.95 0 0 0 10.952 12c-1.195 0-2.353.161-3.452.463m10-2.066A15.9 15.9 0 0 0 10.951 9c-1.363 0-2.687.17-3.95.492m5 11.658a9.15 9.15 0 1 1 0-18.3 9.15 9.15 0 0 1 0 18.3"/>
  <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
    </svg>
  );
}
