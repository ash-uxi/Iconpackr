import React from 'react';

/**
 * PiBanRightContrast icon from the contrast style in security category.
 */
interface PiBanRightContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBanRightContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'ban-right icon',
  ...props
}: PiBanRightContrastProps): JSX.Element {
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
      <path d="M18.47 5.53A9.15 9.15 0 0 0 5.53 18.47M18.47 5.53A9.15 9.15 0 1 1 5.53 18.47M18.47 5.53 5.53 18.47"/>
  <path fill="currentColor" d="M21.15 12a9.15 9.15 0 1 1-18.3 0 9.15 9.15 0 0 1 18.3 0" opacity=".28"/>
    </svg>
  );
}
