import React from 'react';

/**
 * PiCalendarSettingsContrast icon from the contrast style in time category.
 */
interface PiCalendarSettingsContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiCalendarSettingsContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'calendar-settings icon',
  ...props
}: PiCalendarSettingsContrastProps): JSX.Element {
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
      <path d="M18 18h.01m2.95-8c-.05-.982-.163-1.684-.417-2.296a6 6 0 0 0-3.247-3.247A5.1 5.1 0 0 0 16 4.127M20.96 10H3.04m17.92 0c.018.352.028.74.033 1.172M3.04 10C3 10.788 3 11.755 3 13c0 2.796 0 4.194.457 5.296a6 6 0 0 0 3.247 3.247c1.013.42 2.274.454 4.64.457M3.04 10c.05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5.1 5.1 0 0 1 8 4.127M8 2v2.128m0 0V6m0-1.872C8.941 4 10.172 4 12 4s3.059 0 4 .128M16 2v2.128m0 0V6m2 8 1.179 1.155 1.65.017.017 1.65L22 18l-1.154 1.179-.018 1.65-1.65.017L18 22l-1.179-1.154-1.65-.018-.016-1.65L14 18l1.155-1.179.017-1.65 1.65-.016z"/>
  <path fill="currentColor" d="M3 13c0-1.245 0-2.212.04-3 .05-.982.163-1.684.417-2.296a6 6 0 0 1 3.247-3.247A5.1 5.1 0 0 1 8 4.127C8.941 4 10.172 4 12 4s3.059 0 4 .128c.498.067.915.17 1.296.329a6 6 0 0 1 3.247 3.247c.254.612.367 1.314.417 2.296.03.605.038 1.316.04 2.176l-.14-.004-.444-.005-.317-.31a3 3 0 0 0-4.198 0l-.317.31-.444.005a3 3 0 0 0-2.968 2.968l-.005.444-.31.317a3 3 0 0 0 0 4.198l.31.317.005.444c.003.297.05.584.133.855V22H12c-2.796 0-4.193 0-5.296-.457a6 6 0 0 1-3.247-3.247C3 17.194 3 15.796 3 13" opacity=".28"/>
    </svg>
  );
}
