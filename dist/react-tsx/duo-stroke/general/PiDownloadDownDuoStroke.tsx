import React from 'react';

/**
 * PiDownloadDownDuoStroke icon from the duo-stroke style in general category.
 */
interface PiDownloadDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDownloadDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'download-down icon',
  ...props
}: PiDownloadDownDuoStrokeProps): JSX.Element {
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
      <path d="M3 15C3 17.7614 5.23858 20 8 20H16C18.7614 20 21 17.7614 21 15" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 12.1885C9.74024 13.1755 10.599 14.0668 11.5564 14.8426C11.6859 14.9475 11.843 15 12 15M15 12.1885C14.2598 13.1755 13.401 14.0668 12.4436 14.8426C12.3141 14.9475 12.157 15 12 15M12 15V4" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
