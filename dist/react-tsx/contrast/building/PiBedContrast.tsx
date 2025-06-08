import React from 'react';

/**
 * PiBedContrast icon from the contrast style in building category.
 */
interface PiBedContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBedContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'bed icon',
  ...props
}: PiBedContrastProps): JSX.Element {
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
      <path d="M12 6v5"/>
  <path fill="currentColor" d="M3 13.5A2.5 2.5 0 0 1 5.5 11h13a2.5 2.5 0 0 1 2.5 2.5V18H3z" opacity=".28"/>
  <path d="M3 18h18M3 20v-6.5A2.5 2.5 0 0 1 5.5 11h13a2.5 2.5 0 0 1 2.5 2.5V20M5 11V8a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3"/>
    </svg>
  );
}
