import React from 'react';

/**
 * PiMouseScrollUpDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiMouseScrollUpDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMouseScrollUpDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mouse-scroll-up icon',
  ...props
}: PiMouseScrollUpDuoStrokeProps): JSX.Element {
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
      <path d="M14 10.5003C13.5065 9.84234 12.934 9.24812 12.2957 8.7309C12.2094 8.66095 12.1047 8.62598 12 8.62598C11.8953 8.62598 11.7906 8.66095 11.7043 8.73091C11.066 9.24812 10.4935 9.84234 10 10.5003" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M19 14V10C19 6.13401 15.866 3 12 3C8.13401 3 5 6.13401 5 10V14C5 17.866 8.13401 21 12 21C15.866 21 19 17.866 19 14Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
