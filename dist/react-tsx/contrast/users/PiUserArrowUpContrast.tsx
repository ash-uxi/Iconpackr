import React from 'react';

/**
 * PiUserArrowUpContrast icon from the contrast style in users category.
 */
interface PiUserArrowUpContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserArrowUpContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'user-arrow-up icon',
  ...props
}: PiUserArrowUpContrastProps): JSX.Element {
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
    <path d="M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M13.314 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h11v-1.188a3 3 0 0 1-2.686-4.337z"/>
  </g>
  <path d="M22 16.812a15 15 0 0 0-2.556-2.655A.7.7 0 0 0 19 14m-3 2.811a15 15 0 0 1 2.556-2.654A.7.7 0 0 1 19 14m0 0v7m-4 0H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h4.43M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}
