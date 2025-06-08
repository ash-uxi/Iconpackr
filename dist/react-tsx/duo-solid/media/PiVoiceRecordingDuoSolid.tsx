import React from 'react';

/**
 * PiVoiceRecordingDuoSolid icon from the duo-solid style in media category.
 */
interface PiVoiceRecordingDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVoiceRecordingDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'voice-recording icon',
  ...props
}: PiVoiceRecordingDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} d="M18 6.7A5.15 5.15 0 1 0 18 17a5.15 5.15 0 0 0 0-10.3" /> <path d="M6 16h12" opacity=".28" /> <path fill={color || "currentColor"} d="M6 6.7A5.15 5.15 0 1 0 6 17 5.15 5.15 0 0 0 6 6.7" />
    </svg>
  );
}
