import React from 'react';

/**
 * PiVercelContrast icon from the contrast style in apps-&-social category.
 */
interface PiVercelContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVercelContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'vercel icon',
  ...props
}: PiVercelContrastProps): JSX.Element {
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
      <path fill="currentColor" d="M11.138 3.466a1 1 0 0 1 1.724 0l8.251 14.027A1 1 0 0 1 20.252 19H3.747a1 1 0 0 1-.862-1.507z" opacity=".28"/>
  <path d="M11.138 3.465a1 1 0 0 1 1.724 0l8.251 14.028A1 1 0 0 1 20.252 19H3.748a1 1 0 0 1-.862-1.507z"/>
    </svg>
  );
}
