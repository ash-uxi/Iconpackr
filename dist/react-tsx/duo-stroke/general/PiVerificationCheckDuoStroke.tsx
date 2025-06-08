import React from 'react';

/**
 * PiVerificationCheckDuoStroke icon from the duo-stroke style in general category.
 */
interface PiVerificationCheckDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVerificationCheckDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'verification-check icon',
  ...props
}: PiVerificationCheckDuoStrokeProps): JSX.Element {
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
      <path d="M19.2737 8.98585C20.4559 9.59049 21.25 10.7095 21.25 12C21.25 13.2905 20.4559 14.4095 19.2737 15.0141C19.6888 16.2685 19.4541 17.6312 18.5427 18.5427C17.6312 19.4541 16.2685 19.6798 15.0141 19.2737C14.4185 20.4559 13.2905 21.25 12 21.25C10.7095 21.25 9.59049 20.4559 8.98585 19.2737C7.73146 19.6798 6.36878 19.4541 5.45732 18.5427C4.54585 17.6312 4.32024 16.2685 4.73537 15.0141C3.55317 14.4095 2.75 13.2905 2.75 12C2.75 10.7095 3.55317 9.59049 4.73537 8.98585C4.32024 7.73146 4.54585 6.36878 5.45732 5.45732C6.36878 4.54585 7.73146 4.31122 8.99488 4.72634C9.59049 3.54415 10.7095 2.75 12 2.75C13.2905 2.75 14.4185 3.54415 15.0141 4.72634C16.2685 4.31122 17.6312 4.54585 18.5427 5.45732C19.4541 6.36878 19.6888 7.73146 19.2737 8.98585Z" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M9 12.1407L11.0067 14.1453C11.9719 12.4577 13.3076 11.0111 14.9132 9.91476L15 9.85547" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
