import React from 'react';

/**
 * PiWindowPictureInPictureDuoStroke icon from the duo-stroke style in devices category.
 */
interface PiWindowPictureInPictureDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowPictureInPictureDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'window-picture-in-picture icon',
  ...props
}: PiWindowPictureInPictureDuoStrokeProps): JSX.Element {
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
      <path d="M18.6 13C19.4401 13 19.8601 13 20.181 13.1635C20.4632 13.3073 20.6927 13.5368 20.8365 13.819C21 14.1399 21 14.5599 21 15.4V17.6C21 18.4401 21 18.8601 20.8365 19.181C20.6927 19.4632 20.4632 19.6927 20.181 19.8365C19.8601 20 19.4401 20 18.6 20H14.4C13.5599 20 13.1399 20 12.819 19.8365C12.5368 19.6927 12.3073 19.4632 12.1635 19.181C12 18.8601 12 18.4401 12 17.6L12 15.4C12 14.5599 12 14.1399 12.1635 13.819C12.3073 13.5368 12.5368 13.3073 12.819 13.1635C13.1399 13 13.5599 13 14.4 13L18.6 13Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M21 9.21634V7C21 5.34315 19.6569 4 18 4H6C4.34315 4 3 5.34315 3 7V17C3 18.6569 4.34315 20 6 20H8.22023" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
