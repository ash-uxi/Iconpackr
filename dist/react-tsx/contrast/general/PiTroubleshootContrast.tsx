import React from 'react';

/**
 * PiTroubleshootContrast icon from the contrast style in general category.
 */
interface PiTroubleshootContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTroubleshootContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'troubleshoot icon',
  ...props
}: PiTroubleshootContrastProps): JSX.Element {
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
      <path fill="currentColor" fillRule="evenodd" d="M18.364 18.364A8.97 8.97 0 0 0 21 12a8.97 8.97 0 0 0-2.636-6.364A8.97 8.97 0 0 0 12 3a8.97 8.97 0 0 0-6.364 2.636A8.97 8.97 0 0 0 3 12a8.97 8.97 0 0 0 2.636 6.364A8.97 8.97 0 0 0 12 21a8.97 8.97 0 0 0 6.364-2.636M9.879 9.879A3 3 0 0 1 12 9c.828 0 1.58.337 2.121.879.542.542.879 1.293.879 2.121s-.337 1.58-.879 2.121A3 3 0 0 1 12 15c-.828 0-1.58-.337-2.121-.879A3 3 0 0 1 9 12c0-.828.337-1.58.879-2.121" clipRule="evenodd" opacity=".28"/>
  <path d="M18.364 5.636A8.97 8.97 0 0 0 12 3a8.97 8.97 0 0 0-6.364 2.636m12.728 0A8.97 8.97 0 0 1 21 12a8.97 8.97 0 0 1-2.636 6.364m0-12.728-4.243 4.243m0 0A3 3 0 0 0 12 9a3 3 0 0 0-2.121.879m4.242 0A3 3 0 0 1 15 12a3 3 0 0 1-.879 2.121M9.88 9.88A3 3 0 0 0 9 12c0 .828.336 1.578.879 2.121m0-4.242L5.636 5.636m4.243 8.485A3 3 0 0 0 12 15a3 3 0 0 0 2.121-.879m-4.242 0-4.243 4.243m8.485-4.243 4.243 4.243m0 0A8.97 8.97 0 0 1 12 21a8.97 8.97 0 0 1-6.364-2.636m0 0A8.97 8.97 0 0 1 3 12a8.97 8.97 0 0 1 2.636-6.364"/>
    </svg>
  );
}
