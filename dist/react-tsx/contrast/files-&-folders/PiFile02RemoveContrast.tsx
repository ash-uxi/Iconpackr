import React from 'react';

/**
 * PiFile02RemoveContrast icon from the contrast style in files-&-folders category.
 */
interface PiFile02RemoveContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFile02RemoveContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'file-02-remove icon',
  ...props
}: PiFile02RemoveContrastProps): JSX.Element {
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
  <path d="M20 11v7a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h3m9 9v-1a8 8 0 0 0-8-8h-1m9 9a3 3 0 0 0-3-3h-.6c-.372 0-.557 0-.713-.025a2 2 0 0 1-1.662-1.662C14 6.157 14 5.972 14 5.6V5a3 3 0 0 0-3-3M9 14h6"/>
    </svg>
  );
}
