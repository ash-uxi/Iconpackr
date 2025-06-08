import React from 'react';

/**
 * PiBottleMilkDuoStroke icon from the duo-stroke style in food category.
 */
interface PiBottleMilkDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBottleMilkDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'bottle-milk icon',
  ...props
}: PiBottleMilkDuoStrokeProps): JSX.Element {
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
      <path d="M8 2H16" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M8 2H16M9 2V4.789C8.99998 5.57879 8.76616 6.3509 8.328 7.008L7.672 7.992C7.23366 8.64939 6.99982 9.42187 7 10.212V20C7 20.5304 7.21071 21.0391 7.58579 21.4142C7.96086 21.7893 8.46957 22 9 22H15C15.5304 22 16.0391 21.7893 16.4142 21.4142C16.7893 21.0391 17 20.5304 17 20V10.211C17 9.42121 16.7662 8.6491 16.328 7.992L15.672 7.008C15.2337 6.35061 14.9998 5.57813 15 4.788V2" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9.5 14.4971C8.64158 14.4971 7.79175 14.6679 7 14.9996V20C7 21.1046 7.89543 22 9 22H15C16.1046 22 17 21.1046 17 20V14.9996C16.2083 15.3313 15.3584 15.5021 14.5 15.5021C13.6416 15.5021 12.7917 15.3313 12 14.9996C11.2083 14.6679 10.3584 14.4971 9.5 14.4971Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
