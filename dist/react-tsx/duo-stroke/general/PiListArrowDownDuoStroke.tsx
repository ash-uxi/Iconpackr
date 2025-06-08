import React from 'react';

/**
 * PiListArrowDownDuoStroke icon from the duo-stroke style in general category.
 */
interface PiListArrowDownDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiListArrowDownDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'list-arrow-down icon',
  ...props
}: PiListArrowDownDuoStrokeProps): JSX.Element {
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
      <path d="M16 16.1857C16.7402 17.1727 17.599 18.0641 18.5564 18.8399C18.6859 18.9448 18.843 18.9973 19 18.9973M22 16.1857C21.2598 17.1727 20.401 18.0641 19.4436 18.8399C19.3141 18.9448 19.157 18.9973 19 18.9973M19 18.9973V11.5" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M4 12H12M4 18H12M4 6H20" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
