import React from 'react';

/**
 * PiVideoCallOutgoingContrast icon from the contrast style in devices category.
 */
interface PiVideoCallOutgoingContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVideoCallOutgoingContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'video-call-outgoing icon',
  ...props
}: PiVideoCallOutgoingContrastProps): JSX.Element {
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
      <path d="M12.85 13.394c.174-1.222.197-2.46.068-3.685a.7.7 0 0 0-.202-.425m-4.11-.133a15 15 0 0 1 3.685-.069.7.7 0 0 1 .425.202m0 0L7 14.997"/>
  <path fill="currentColor" d="M13 19a4 4 0 0 0 4-4V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v6a4 4 0 0 0 4 4z" opacity=".28"/>
  <path d="M17.001 13.934a2 2 0 0 0 .713 1.465l1 .84c1.3 1.093 3.286.168 3.286-1.531V9.292c0-1.7-1.985-2.624-3.286-1.531l-1 .84A2 2 0 0 0 17 10.059m0 3.875L17 15a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4l.001 1.059m0 3.875v-3.875"/>
    </svg>
  );
}
