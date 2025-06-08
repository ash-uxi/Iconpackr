import React from 'react';

/**
 * PiDownloadDownContrast icon from the contrast style in general category.
 */
interface PiDownloadDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDownloadDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'download-down icon',
  ...props
}: PiDownloadDownContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M11.556 14.843A15 15 0 0 1 9 12.188a30 30 0 0 0 6 0 15 15 0 0 1-2.556 2.655.704.704 0 0 1-.888 0" opacity=".28"/>
  <path d="M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5m-9-2.661V4m0 8.339q-1.503 0-3-.15a15 15 0 0 0 2.556 2.654.704.704 0 0 0 .888 0A15 15 0 0 0 15 12.188q-1.498.15-3 .15"/>
    </svg>
  );
}
