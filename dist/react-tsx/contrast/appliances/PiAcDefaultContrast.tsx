import React from 'react';

/**
 * PiAcDefaultContrast icon from the contrast style in appliances category.
 */
interface PiAcDefaultContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiAcDefaultContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ac-default icon',
  ...props
}: PiAcDefaultContrastProps): JSX.Element {
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
      <path d="M18 12h-2m6 4v-6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v6z"/>
  <path fill="currentColor" d="M20 8H4a2 2 0 0 0-2 2v6h20v-6a2 2 0 0 0-2-2" opacity=".28"/>
    </svg>
  );
}
