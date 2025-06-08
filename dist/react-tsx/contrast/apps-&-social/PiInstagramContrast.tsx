import React from 'react';

/**
 * PiInstagramContrast icon from the contrast style in apps-&-social category.
 */
interface PiInstagramContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiInstagramContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'instagram icon',
  ...props
}: PiInstagramContrastProps): JSX.Element {
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
      <path d="M17.046 7h.01m-14.01 5c0-2.514 0-3.77.354-4.78a6.3 6.3 0 0 1 3.866-3.866C8.276 3 9.533 3 12.046 3s3.77 0 4.781.354a6.3 6.3 0 0 1 3.866 3.865c.353 1.01.353 2.267.353 4.781s0 3.77-.353 4.78a6.3 6.3 0 0 1-3.866 3.866c-1.01.354-2.267.354-4.78.354s-3.771 0-4.781-.354A6.3 6.3 0 0 1 3.4 16.782c-.354-1.01-.354-2.267-.354-4.781m12.778-.56a3.819 3.819 0 1 1-7.555 1.12 3.819 3.819 0 0 1 7.555-1.12"/>
  <path fill="currentColor" d="M3.4 7.22c-.354 1.01-.354 2.266-.354 4.78s0 3.77.354 4.78a6.3 6.3 0 0 0 3.866 3.866c1.01.354 2.267.354 4.78.354s3.77 0 4.781-.354a6.3 6.3 0 0 0 3.866-3.865c.353-1.01.353-2.267.353-4.781s0-3.77-.353-4.78a6.3 6.3 0 0 0-3.866-3.866C15.817 3 14.56 3 12.047 3s-3.771 0-4.781.354A6.3 6.3 0 0 0 3.4 7.219" opacity=".28"/>
    </svg>
  );
}
