import React from 'react';

/**
 * PiItalicDuoStroke icon from the duo-stroke style in editing category.
 */
interface PiItalicDuoStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiItalicDuoStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'italic icon',
  ...props
}: PiItalicDuoStrokeProps): JSX.Element {
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
      <path d="M13.5 5L10.5 19" stroke={color || "currentColor"} strokeWidth="2" opacity="0.28" fill="none"/>
  <path d="M14 19H7M17 5H10" stroke={color || "currentColor"} strokeWidth="2" fill="none"/>
    </svg>
  );
}
