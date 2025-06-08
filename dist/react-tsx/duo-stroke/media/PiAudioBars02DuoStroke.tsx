import React from 'react';

/**
 * PiAudioBars02DuoStroke icon from the duo-stroke style in media category.
 */
interface PiAudioBars02DuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAudioBars02DuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'audio-bars-02 icon',
  ...props
}: PiAudioBars02DuoStrokeProps): JSX.Element {
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
      <path d="M2 10V13M10 3V21M18 5V18" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 6V17M14 8V15M22 10V13" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
