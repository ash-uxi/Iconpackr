import React from 'react';

/**
 * PiDangerSkullContrast icon from the contrast style in general category.
 */
interface PiDangerSkullContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiDangerSkullContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'danger-skull icon',
  ...props
}: PiDangerSkullContrastProps): JSX.Element {
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
      <path d="M10.3 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0M15.7 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
  <path fill="currentColor" d="M19 14.419V10a7 7 0 1 0-14 0v4.419c0 .944.604 1.782 1.5 2.081A2.19 2.19 0 0 1 8 18.581v.094A2.325 2.325 0 0 0 10.325 21h3.35A2.325 2.325 0 0 0 16 18.675v-.094c0-.944.604-1.782 1.5-2.081a2.19 2.19 0 0 0 1.5-2.081" opacity=".28"/>
  <path d="M5 10a7 7 0 0 1 14 0v4.419c0 .944-.604 1.782-1.5 2.081a2.19 2.19 0 0 0-1.5 2.081v.094A2.325 2.325 0 0 1 13.675 21h-3.35A2.325 2.325 0 0 1 8 18.675v-.094c0-.944-.604-1.782-1.5-2.081A2.19 2.19 0 0 1 5 14.419z"/>
    </svg>
  );
}
