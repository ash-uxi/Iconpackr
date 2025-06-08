import React from 'react';

/**
 * PiKeyLeft02Contrast icon from the contrast style in security category.
 */
interface PiKeyLeft02ContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiKeyLeft02Contrast({
  size = 24,
  color,
  className,
  ariaLabel = 'key-left-02 icon',
  ...props
}: PiKeyLeft02ContrastProps): JSX.Element {
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
      <path d="M18.501 13v-2a1.25 1.25 0 0 1 0 2"/>
  <path fill="currentColor" d="m4 10-2 2 2 2h3l1.146-1.146a.5.5 0 0 1 .708 0L10 14h3.468a4.5 4.5 0 1 0 0-4z" opacity=".28"/>
  <path d="m4.001 10-2 2 2 2h3l1.146-1.146a.5.5 0 0 1 .708 0L10.001 14h3.468a4.5 4.5 0 1 0 0-4z"/>
    </svg>
  );
}
