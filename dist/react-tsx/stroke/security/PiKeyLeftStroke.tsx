import React from 'react';

/**
 * PiKeyLeftStroke icon from the stroke style in security category.
 */
interface PiKeyLeftStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyLeftStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'key-left icon',
  ...props
}: PiKeyLeftStrokeProps): JSX.Element {
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
      <path d="M14 12C14 14.2091 15.7909 16 18 16C20.2091 16 22 14.2091 22 12C22 9.79086 20.2091 8 18 8C15.7909 8 14 9.79086 14 12ZM14 12H2V15M6 12V14" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
