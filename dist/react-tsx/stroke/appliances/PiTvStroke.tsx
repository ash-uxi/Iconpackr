import React from 'react';

/**
 * PiTvStroke icon from the stroke style in appliances category.
 */
interface PiTvStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTvStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'tv icon',
  ...props
}: PiTvStrokeProps): JSX.Element {
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
      <path d="M20 21L18 18M4 21L6 18M4.4 18H19.6C20.4401 18 20.8601 18 21.181 17.8365C21.4632 17.6927 21.6927 17.4632 21.8365 17.181C22 16.8601 22 16.4401 22 15.6V6.4C22 5.55992 22 5.13988 21.8365 4.81901C21.6927 4.53677 21.4632 4.3073 21.181 4.16349C20.8601 4 20.4401 4 19.6 4H4.4C3.55992 4 3.13988 4 2.81901 4.16349C2.53677 4.3073 2.3073 4.53677 2.16349 4.81901C2 5.13988 2 5.55992 2 6.4V15.6C2 16.4401 2 16.8601 2.16349 17.181C2.3073 17.4632 2.53677 17.6927 2.81901 17.8365C3.13988 18 3.55992 18 4.4 18Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
