import React from 'react';

/**
 * PiSupportHeartContrast icon from the contrast style in general category.
 */
interface PiSupportHeartContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSupportHeartContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'support-heart icon',
  ...props
}: PiSupportHeartContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M2 12a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0zM14.81 9.572c.363 0 3.633-1.687 3.633-4.048 0-1.18-1.09-2.01-2.18-2.024-.545-.007-1.09.169-1.454.675-.363-.506-.917-.675-1.453-.675-1.09 0-2.18.844-2.18 2.024 0 2.361 3.27 4.048 3.633 4.048"/>
  </g>
  <path d="M15.424 14h4.47c1.364 0 3.469 1.687 1.951 2.997C17.5 21 10.5 21 6 16.913M15.424 14q.193.235.333.514A1.027 1.027 0 0 1 14.839 16H10m5.424-2a2.74 2.74 0 0 0-2.116-1h-1.123a.8.8 0 0 1-.35-.083 10.47 10.47 0 0 0-5.839-1.04Q6 11.936 6 12m0 0v4.913M6 12a2 2 0 1 0-4 0v5a2 2 0 1 0 4 0m0-5v5m0-.087V17m8.81-7.428c-.364 0-3.634-1.687-3.634-4.048 0-1.18 1.09-2.024 2.18-2.024.536 0 1.09.169 1.454.675.363-.506.908-.682 1.453-.675 1.09.015 2.18.844 2.18 2.024 0 2.361-3.27 4.048-3.634 4.048"/>
    </svg>
  );
}
