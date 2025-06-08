import React from 'react';

/**
 * PiAudioBars01Stroke icon from the stroke style in media category.
 */
interface PiAudioBars01StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAudioBars01Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'audio-bars-01 icon',
  ...props
}: PiAudioBars01StrokeProps): JSX.Element {
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
      <path d="M3 10V14M7.5 7V17M21 10V14M12 3V21M16.5 7V17" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
