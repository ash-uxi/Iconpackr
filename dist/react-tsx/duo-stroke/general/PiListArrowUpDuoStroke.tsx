import React from 'react';

/**
 * PiListArrowUpDuoStroke icon from the duo-stroke style in general category.
 */
interface PiListArrowUpDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListArrowUpDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-arrow-up icon',
  ...props
}: PiListArrowUpDuoStrokeProps): JSX.Element {
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
      <path d="M16 14.3115C16.7402 13.3245 17.599 12.4332 18.5564 11.6574C18.6859 11.5525 18.843 11.5 19 11.5M22 14.3115C21.2598 13.3245 20.401 12.4332 19.4436 11.6574C19.3141 11.5525 19.157 11.5 19 11.5M19 11.5V18.9973" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H12M4 18H12M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
