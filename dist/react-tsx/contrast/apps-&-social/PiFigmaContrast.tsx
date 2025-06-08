import React from 'react';

/**
 * PiFigmaContrast icon from the contrast style in apps-&-social category.
 */
interface PiFigmaContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiFigmaContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'figma icon',
  ...props
}: PiFigmaContrastProps): JSX.Element {
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
      <g fill="currentColor" opacity=".28">
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2h7a3.5 3.5 0 1 1 0 7H12v10.5A3.5 3.5 0 1 1 8.5 16a3.5 3.5 0 1 1 0-7A3.5 3.5 0 0 1 5 5.5"/>
    <path d="M12 12.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 0 0-7 0"/>
  </g>
  <path d="M12 2H8.5a3.5 3.5 0 1 0 0 7M12 2v7m0-7h3.5a3.5 3.5 0 1 1 0 7M12 9H8.5M12 9v7m0-7h3.5m-7 0a3.5 3.5 0 1 0 0 7m3.5 0H8.5m3.5 0v3.5A3.5 3.5 0 1 1 8.5 16m7-7a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7"/>
    </svg>
  );
}
