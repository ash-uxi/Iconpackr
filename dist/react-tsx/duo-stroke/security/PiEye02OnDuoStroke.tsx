import React from 'react';

/**
 * PiEye02OnDuoStroke icon from the duo-stroke style in security category.
 */
interface PiEye02OnDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiEye02OnDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'eye-02-on icon',
  ...props
}: PiEye02OnDuoStrokeProps): JSX.Element {
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
      <path d="M15 14C15 15.6569 13.6569 17 12 17C10.3431 17 9 15.6569 9 14C9 12.3431 10.3431 11 12 11C13.6569 11 15 12.3431 15 14Z" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
  <path d="M3 14C3 11.8125 5.7 7 12 7C18.3 7 21 11.8125 21 14" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
    </svg>
  );
}
