import React from 'react';

/**
 * PiMicMicrophoneDuoStroke icon from the duo-stroke style in media category.
 */
interface PiMicMicrophoneDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMicMicrophoneDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'mic-microphone icon',
  ...props
}: PiMicMicrophoneDuoStrokeProps): JSX.Element {
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
      <path d="M16.6549 11.561C17.7718 11.5777 18.894 11.1599 19.7462 10.3077C21.4179 8.63597 21.4179 5.92554 19.7462 4.25381C18.0744 2.58207 15.364 2.58206 13.6923 4.2538C12.8407 5.10541 12.4229 6.22654 12.4389 7.34261M12.4409 7.32129L16.6786 11.559" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M16.6786 11.559L6.77128 20.4235C5.87637 21.2242 4.51182 21.1863 3.6627 20.3372C2.81359 19.4881 2.77571 18.1235 3.57642 17.2286L12.4409 7.32129" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
