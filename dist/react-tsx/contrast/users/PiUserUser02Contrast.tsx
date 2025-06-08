import React from 'react';

/**
 * PiUserUser02Contrast icon from the contrast style in users category.
 */
interface PiUserUser02ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserUser02Contrast({
  size = 24,
  color,
  className,
  ariaLabel = 'user-user-02 icon',
  ...props
}: PiUserUser02ContrastProps): JSX.Element {
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
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.275 21h9.45A3.275 3.275 0 0 0 20 17.725c0-2.286-2.284-3.869-4.424-3.066l-1.926.722a4.7 4.7 0 0 1-3.3 0l-1.926-.722C6.284 13.856 4 15.44 4 17.725A3.275 3.275 0 0 0 7.275 21"/>
  </g>
  <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M7.275 21h9.45A3.275 3.275 0 0 0 20 17.725c0-2.286-2.284-3.869-4.424-3.066l-1.926.722a4.7 4.7 0 0 1-3.3 0l-1.926-.722C6.284 13.856 4 15.44 4 17.725A3.275 3.275 0 0 0 7.275 21"/>
    </svg>
  );
}
