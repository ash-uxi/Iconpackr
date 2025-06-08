import React from 'react';

/**
 * PiControlTowerContrast icon from the contrast style in building category.
 */
interface PiControlTowerContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiControlTowerContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'control-tower icon',
  ...props
}: PiControlTowerContrastProps): JSX.Element {
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
      <path d="M12 4V2M15 8l-1 5"/>
  <path fill="currentColor" d="M3.406 5.825A1.5 1.5 0 0 1 4.87 4h14.26a1.5 1.5 0 0 1 1.464 1.825l-1.159 5.217A2.5 2.5 0 0 1 16.995 13h-9.99a2.5 2.5 0 0 1-2.44-1.958z" opacity=".28"/>
  <path d="M3.406 5.825A1.5 1.5 0 0 1 4.87 4h14.26a1.5 1.5 0 0 1 1.464 1.825l-1.159 5.217A2.5 2.5 0 0 1 16.995 13h-9.99a2.5 2.5 0 0 1-2.44-1.958zM4 8h16M7 13l-.5 9M17 13l.5 9M9 8l1 5"/>
    </svg>
  );
}
