import React from 'react';

/**
 * PiDivertLeftSolid icon from the solid style in arrows-&-chevrons category.
 */
interface PiDivertLeftSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDivertLeftSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'divert-left icon',
  ...props
}: PiDivertLeftSolidProps): JSX.Element {
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
      <path d="M3.56069 7.09132C5.41884 6.91943 7.30267 6.99044 9.16515 7.30231C9.55407 7.36744 9.86841 7.65504 9.96775 8.03666C10.0671 8.41828 9.93289 8.82265 9.62508 9.06914L8.52558 9.94964C8.12632 10.2694 7.7381 10.6021 7.36152 10.9473L11.5858 15.1716C12.3669 15.9527 13.6331 15.9527 14.4142 15.1716L21.2929 8.29289C21.6834 7.90237 22.3166 7.90237 22.7071 8.29289C23.0976 8.68342 23.0976 9.31658 22.7071 9.70711L15.8284 16.5858C14.2663 18.1479 11.7337 18.1479 10.1716 16.5858L5.9473 12.3615C5.60213 12.7381 5.26937 13.1263 4.94964 13.5256L4.06914 14.6251C3.82265 14.9329 3.41828 15.0671 3.03666 14.9677C2.65504 14.8684 2.36744 14.5541 2.30231 14.1651C1.99044 12.3026 1.91943 10.4189 2.09132 8.5607C2.127 8.17518 2.29529 7.82357 2.55938 7.55945C2.8235 7.29536 3.17518 7.127 3.56069 7.09132Z" fill="currentColor" stroke="none"/>
    </svg>
  );
}
