import React from 'react';

/**
 * PiAlignRightDuoStroke icon from the duo-stroke style in arrows-&-chevrons category.
 */
interface PiAlignRightDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAlignRightDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'align-right icon',
  ...props
}: PiAlignRightDuoStrokeProps): JSX.Element {
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
      <path d="M11.9691 7.91675C13.4233 8.97539 14.7294 10.2121 15.8551 11.5956C15.9517 11.7143 16 11.8572 16 12.0001M11.9691 16.0834C13.4233 15.0248 14.7294 13.788 15.8551 12.4045C15.9517 12.2859 16 12.143 16 12.0001M16 12.0001L4 12.0001" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M20 5V19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
