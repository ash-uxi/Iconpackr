import React from 'react';

/**
 * PiMusicQuaverNoteDuoStroke icon from the duo-stroke style in media category.
 */
interface PiMusicQuaverNoteDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMusicQuaverNoteDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'music-quaver-note icon',
  ...props
}: PiMusicQuaverNoteDuoStrokeProps): JSX.Element {
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
      <path d="M12 18.9983V3.64314C12 2.42323 13.2831 1.62981 14.3735 2.17536C16.5961 3.28727 18 5.56017 18 8.04647C18 9.46441 17.5985 10.8414 16.8189 12" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6 18.9983C6 17.3405 7.34315 15.9966 9 15.9966C10.6569 15.9966 12 17.3405 12 18.9983C12 20.6561 10.6569 22 9 22C7.34315 22 6 20.6561 6 18.9983Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
