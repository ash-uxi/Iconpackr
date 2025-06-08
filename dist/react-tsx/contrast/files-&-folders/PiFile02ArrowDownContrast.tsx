import React from 'react';

/**
 * PiFile02ArrowDownContrast icon from the contrast style in files-&-folders category.
 */
interface PiFile02ArrowDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02ArrowDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-arrow-down icon',
  ...props
}: PiFile02ArrowDownContrastProps): JSX.Element {
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
  <path d="M20 11a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3m3 13.126a10 10 0 0 1-1.704 1.77A.47.47 0 0 1 12 17m-2-1.874a10 10 0 0 0 1.704 1.77c.087.069.191.104.296.104m0 0v-6m8-1v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h4a8 8 0 0 1 8 8"/>
    </svg>
  );
}
