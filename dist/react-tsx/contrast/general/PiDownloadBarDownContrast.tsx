import React from 'react';

/**
 * PiDownloadBarDownContrast icon from the contrast style in general category.
 */
interface PiDownloadBarDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDownloadBarDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'download-bar-down icon',
  ...props
}: PiDownloadBarDownContrastProps): JSX.Element {
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
      <path d="M12 10.583V4m0 6.583c-2.005 0-4.01-.138-6-.413a30.2 30.2 0 0 0 5.406 5.62.95.95 0 0 0 1.188 0A30.2 30.2 0 0 0 18 10.17c-1.99.275-3.995.413-6 .413M19 20H5"/>
  <path fill="currentColor" d="M6 10.17a30.2 30.2 0 0 0 5.406 5.62.95.95 0 0 0 1.188 0A30.2 30.2 0 0 0 18 10.17a43.8 43.8 0 0 1-12 0" opacity=".28"/>
    </svg>
  );
}
