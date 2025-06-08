import React from 'react';

/**
 * PiMessageArrowDownContrast icon from the contrast style in communication category.
 */
interface PiMessageArrowDownContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMessageArrowDownContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'message-arrow-down icon',
  ...props
}: PiMessageArrowDownContrastProps): JSX.Element {
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
      <path d="M15 10.21a15 15 0 0 1-2.556 2.653.7.7 0 0 1-.444.158m-3-2.812c.74.987 1.599 1.878 2.556 2.654.13.105.287.158.444.158m0 0V7"/>
  <path fill="currentColor" d="M16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 17 6.12 17 7.8 17H8v4l5-4h3.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 14.72 21 13.88 21 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3" opacity=".28"/>
  <path d="M16.2 3H7.8c-1.68 0-2.52 0-3.162.327a3 3 0 0 0-1.311 1.311C3 5.28 3 6.12 3 7.8v4.4c0 1.68 0 2.52.327 3.162a3 3 0 0 0 1.311 1.311C5.28 17 6.12 17 7.8 17H8v4l5-4h3.2c1.68 0 2.52 0 3.162-.327a3 3 0 0 0 1.311-1.311C21 14.72 21 13.88 21 12.2V7.8c0-1.68 0-2.52-.327-3.162a3 3 0 0 0-1.311-1.311C18.72 3 17.88 3 16.2 3"/>
    </svg>
  );
}
