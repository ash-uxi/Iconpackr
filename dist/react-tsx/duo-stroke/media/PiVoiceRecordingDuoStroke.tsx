import React from 'react';

/**
 * PiVoiceRecordingDuoStroke icon from the duo-stroke style in media category.
 */
interface PiVoiceRecordingDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVoiceRecordingDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'voice-recording icon',
  ...props
}: PiVoiceRecordingDuoStrokeProps): JSX.Element {
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
      <path d="M18.0001 16.0002C20.2921 16.0002 22.1501 14.1422 22.1501 11.8502C22.1501 9.55821 20.2921 7.7002 18.0001 7.7002C15.7081 7.7002 13.8501 9.55821 13.8501 11.8502C13.8501 14.1422 15.7081 16.0002 18.0001 16.0002Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M6 16H18" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M6.0001 16.0002C8.29208 16.0002 10.1501 14.1422 10.1501 11.8502C10.1501 9.55821 8.29208 7.7002 6.0001 7.7002C3.70812 7.7002 1.8501 9.55821 1.8501 11.8502C1.8501 14.1422 3.70812 16.0002 6.0001 16.0002Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
