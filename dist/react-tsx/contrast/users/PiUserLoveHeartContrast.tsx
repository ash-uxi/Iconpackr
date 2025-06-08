import React from 'react';

/**
 * PiUserLoveHeartContrast icon from the contrast style in users category.
 */
interface PiUserLoveHeartContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserLoveHeartContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'user-love-heart icon',
  ...props
}: PiUserLoveHeartContrastProps): JSX.Element {
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
    <path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M17 21.32c.4 0 4-1.945 4-4.667 0-1.361-1.2-2.316-2.4-2.333-.6-.009-1.2.194-1.6.777-.4-.583-1.01-.777-1.6-.777-1.2 0-2.4.972-2.4 2.333 0 2.722 3.6 4.666 4 4.666M8 15h2.188v.237A5.3 5.3 0 0 0 10 16.653c0 1.508.544 2.777 1.227 3.779V21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4"/>
  </g>
  <path d="M10.402 21H6a2 2 0 0 1-2-2 4 4 0 0 1 4-4h1.215M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0m1 14.32c-.4 0-4-1.945-4-4.667 0-1.361 1.2-2.333 2.4-2.333.59 0 1.2.194 1.6.777.4-.583 1-.786 1.6-.777 1.2.016 2.4.972 2.4 2.333 0 2.722-3.6 4.666-4 4.666"/>
    </svg>
  );
}
