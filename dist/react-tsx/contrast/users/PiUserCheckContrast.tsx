import React from 'react';

/**
 * PiUserCheckContrast icon from the contrast style in users category.
 */
interface PiUserCheckContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiUserCheckContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'user-check icon',
  ...props
}: PiUserCheckContrastProps): JSX.Element {
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
    <path d="M11 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8M7 14h1.659l2.382 1.172a3 3 0 0 0 .839 2.617l2.341 2.338q.057.057.116.11L13.469 22H5a3 3 0 0 1-3-3 5 5 0 0 1 5-5"/>
  </g>
  <path d="M10.051 15H7a4 4 0 0 0-4 4 2 2 0 0 0 2 2h8.684M14 15.666l2.341 2.339C17.49 15.997 19.093 14.303 21 13m-6-6a4 4 0 1 1-8 0 4 4 0 0 1 8 0"/>
    </svg>
  );
}
