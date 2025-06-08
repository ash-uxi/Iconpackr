import React from 'react';

/**
 * PiUploadUpContrast icon from the contrast style in general category.
 */
interface PiUploadUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUploadUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'upload-up icon',
  ...props
}: PiUploadUpContrastProps): JSX.Element {
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
      <path d="M3 15a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5m-9-8.45V15m0-8.45c-1 0-2.006.162-3 .262a15 15 0 0 1 2.556-2.655.7.7 0 0 1 .888 0A15 15 0 0 1 15 6.812c-.994-.1-2-.262-3-.262"/>
  <path fill="currentColor" d="M9 6.812a15 15 0 0 1 2.556-2.655.7.7 0 0 1 .888 0A15 15 0 0 1 15 6.812c-.994-.1-2-.262-3-.262s-2.006.162-3 .262" opacity=".28"/>
    </svg>
  );
}
