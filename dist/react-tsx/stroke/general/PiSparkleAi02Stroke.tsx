import React from 'react';

/**
 * PiSparkleAi02Stroke icon from the stroke style in general category.
 */
interface PiSparkleAi02StrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiSparkleAi02Stroke({
  size = 24,
  color,
  className,
  ariaLabel = 'sparkle-ai-02 icon',
  ...props
}: PiSparkleAi02StrokeProps): JSX.Element {
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
      <path d="M12.9 3C13.5401 8.03653 15.5305 11.1418 21 12C15.8102 12.8143 13.5701 15.7277 12.9 21C12.2299 15.7277 9.98984 12.8143 4.8 12C9.98984 11.1857 12.2299 8.2723 12.9 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
  <path d="M5.7 3C5.94808 4.50612 6.8515 5.44494 8.4 5.7C6.8515 5.95506 5.94808 6.89388 5.7 8.4C5.45192 6.89388 4.5485 5.95506 3 5.7C4.50612 5.45192 5.44494 4.5485 5.7 3Z" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
