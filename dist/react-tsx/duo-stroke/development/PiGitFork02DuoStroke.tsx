import React from 'react';

/**
 * PiGitFork02DuoStroke icon from the duo-stroke style in development category.
 */
interface PiGitFork02DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGitFork02DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'git-fork-02 icon',
  ...props
}: PiGitFork02DuoStrokeProps): JSX.Element {
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
      <path d="M21 5.5C21 7.15685 19.6569 8.5 18 8.5C17.9581 8.5 17.9164 8.49914 17.8749 8.49744C16.2761 8.43186 15 7.11495 15 5.5C15 3.84315 16.3431 2.5 18 2.5C19.6569 2.5 21 3.84315 21 5.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 15.5001V8.50012M17.8749 8.49756C17.7208 9.10234 17.6168 9.45951 17.466 9.76601C16.9263 10.8629 15.9146 11.6528 14.7196 11.9104C14.303 12.0001 13.8276 12.0001 12.8769 12.0001H11.9554C10.5196 12.0001 9.80167 12.0001 9.16785 12.2187C8.60735 12.4121 8.09684 12.7276 7.67326 13.1424C7.19776 13.6082 6.87789 14.2444 6.24507 15.51" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 18.5C9 20.1569 7.65685 21.5 6 21.5C4.34315 21.5 3 20.1569 3 18.5C3 16.8431 4.34315 15.5 6 15.5C7.65685 15.5 9 16.8431 9 18.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M9 5.5C9 7.15685 7.65685 8.5 6 8.5C4.34315 8.5 3 7.15685 3 5.5C3 3.84315 4.34315 2.5 6 2.5C7.65685 2.5 9 3.84315 9 5.5Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
