import React from 'react';

/**
 * PiHashtagDuoStroke icon from the duo-stroke style in apps-&-social category.
 */
interface PiHashtagDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiHashtagDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'hashtag icon',
  ...props
}: PiHashtagDuoStrokeProps): JSX.Element {
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
      <path d="M19.5 15H3.5M20.5 9H4.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M7 20L10 4M14 20L17 4" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
