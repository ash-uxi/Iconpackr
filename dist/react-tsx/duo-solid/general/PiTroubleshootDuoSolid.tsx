import React from 'react';

/**
 * PiTroubleshootDuoSolid icon from the duo-solid style in general category.
 */
interface PiTroubleshootDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTroubleshootDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'troubleshoot icon',
  ...props
}: PiTroubleshootDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path d="M18.364 5.637 14.83 9.169m0 5.663 3.533 3.533m-9.196-3.532-3.532 3.532m0-12.728 3.532 3.532" /> <path fill={color || "currentColor"} d="M4.929 4.929A9.97 9.97 0 0 1 12 2a9.97 9.97 0 0 1 7.071 2.929A9.97 9.97 0 0 1 22 12a9.97 9.97 0 0 1-2.929 7.071A9.97 9.97 0 0 1 12 22a9.97 9.97 0 0 1-7.071-2.929A9.97 9.97 0 0 1 2 12a9.97 9.97 0 0 1 2.929-7.071m4.95 4.95A3 3 0 0 0 9 12c0 .828.337 1.58.879 2.121A3 3 0 0 0 12 15c.828 0 1.58-.337 2.121-.879A3 3 0 0 0 15 12c0-.828-.337-1.58-.879-2.121A3 3 0 0 0 12 9c-.828 0-1.58.337-2.121.879" opacity=".28" />
    </svg>
  );
}
