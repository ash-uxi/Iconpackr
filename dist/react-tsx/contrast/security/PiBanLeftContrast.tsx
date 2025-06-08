import React from 'react';

/**
 * PiBanLeftContrast icon from the contrast style in security category.
 */
interface PiBanLeftContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBanLeftContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ban-left icon',
  ...props
}: PiBanLeftContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M2.85 12a9.15 9.15 0 1 0 18.3 0 9.15 9.15 0 0 0-18.3 0" opacity=".28"/>
  <path d="M5.53 5.53a9.15 9.15 0 1 1 12.94 12.94M5.53 5.53a9.15 9.15 0 0 0 12.94 12.94M5.53 5.53l12.94 12.94"/>
    </svg>
  );
}
