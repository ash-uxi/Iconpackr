import React from 'react';

/**
 * PiGodlyWebsiteStroke icon from the stroke style in apps-&-social category.
 */
interface PiGodlyWebsiteStrokeProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiGodlyWebsiteStroke({
  size = 24,
  color,
  className,
  ariaLabel = 'godly-website icon',
  ...props
}: PiGodlyWebsiteStrokeProps): JSX.Element {
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
      <path d="M13.5 2L7.5 12H16.5L10.5 22" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
}
