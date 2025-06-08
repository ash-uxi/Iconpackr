import React from 'react';

/**
 * PiSendPlaneSlantStroke icon from the stroke style in communication category.
 */
interface PiSendPlaneSlantStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSendPlaneSlantStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'send-plane-slant icon',
  ...props
}: PiSendPlaneSlantStrokeProps): JSX.Element {
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
      <path d="M9.53908 14.4609L4.06343 11.4746C2.6344 10.6952 2.64856 8.64068 4.08807 7.90084C8.05782 5.86056 12.279 4.34556 16.6459 3.39374C17.8998 3.12044 19.3328 2.56333 20.3847 3.61527C21.4367 4.66721 20.8796 6.10024 20.6063 7.35412C19.6544 11.721 18.1394 15.9422 16.0992 19.9119C15.3593 21.3514 13.3048 21.3656 12.5254 19.9366L9.53908 14.4609ZM9.53908 14.4609L12.8477 11.1523" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
