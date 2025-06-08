import React from 'react';

/**
 * PiAlignBottomStroke icon from the stroke style in arrows-&-chevrons category.
 */
interface PiAlignBottomStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignBottomStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-bottom icon',
  ...props
}: PiAlignBottomStrokeProps): JSX.Element {
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
      <path d="M7.91667 11.9691C8.97531 13.4233 10.212 14.7294 11.5955 15.8551C11.7142 15.9517 11.8571 16 12 16M16.0833 11.9691C15.0247 13.4233 13.788 14.7294 12.4045 15.8551C12.2858 15.9517 12.1429 16 12 16M12 16V4M5 20H19" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
