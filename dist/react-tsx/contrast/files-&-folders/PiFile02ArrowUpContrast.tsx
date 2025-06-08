import React from 'react';

/**
 * PiFile02ArrowUpContrast icon from the contrast style in files-&-folders category.
 */
interface PiFile02ArrowUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02ArrowUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-arrow-up icon',
  ...props
}: PiFile02ArrowUpContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M16 22H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8v8a4 4 0 0 1-4 4" opacity=".28"/>
  <path d="M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m-1 10.874a10 10 0 0 1 1.704-1.77A.47.47 0 0 1 12 11m2 1.874a10 10 0 0 0-1.704-1.77A.47.47 0 0 0 12 11m0 0v6m8-7v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8"/>
    </svg>
  );
}
