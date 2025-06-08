import React from 'react';

/**
 * PiAudioBars02Stroke icon from the stroke style in media category.
 */
interface PiAudioBars02StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAudioBars02Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'audio-bars-02 icon',
  ...props
}: PiAudioBars02StrokeProps): JSX.Element {
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
      <path d="M2 10V13M6 6V17M10 3V21M14 8V15M18 5V18M22 10V13" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
