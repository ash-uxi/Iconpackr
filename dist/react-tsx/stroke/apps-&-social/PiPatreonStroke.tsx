import React from 'react';

/**
 * PiPatreonStroke icon from the stroke style in apps-&-social category.
 */
interface PiPatreonStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiPatreonStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'patreon icon',
  ...props
}: PiPatreonStrokeProps): JSX.Element {
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
      <path d="M21.1307 8.00805C21.1274 5.45472 19.1382 3.36138 16.8049 2.60638C13.9065 1.66888 10.0849 1.80472 7.3182 3.10972C3.96404 4.69222 2.9107 8.15888 2.87154 11.6164C2.83904 14.4589 3.1232 21.9464 7.3457 21.9997C10.4832 22.0389 10.9507 17.9964 12.4024 16.0489C13.4357 14.6639 14.7657 14.2722 16.4032 13.8672C19.2165 13.1706 21.1349 10.9497 21.1307 8.00805Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
