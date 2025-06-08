import React from 'react';

/**
 * PiEye02OnContrast icon from the contrast style in security category.
 */
interface PiEye02OnContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEye02OnContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'eye-02-on icon',
  ...props
}: PiEye02OnContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M15 14a3 3 0 1 1-6 0 3 3 0 0 1 6 0" opacity=".28"/>
  <path d="M3 14c0-2.187 2.7-7 9-7s9 4.813 9 7m-6 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    </svg>
  );
}
