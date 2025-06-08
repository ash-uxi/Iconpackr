import React from 'react';

/**
 * PiTelescopeContrast icon from the contrast style in devices category.
 */
interface PiTelescopeContrastProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTelescopeContrast({
  size = 24,
  color,
  className,
  ariaLabel = 'telescope icon',
  ...props
}: PiTelescopeContrastProps): JSX.Element {
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
    <path d="m18.008 11.798-4.047.806Q14 12.797 14 13a2 2 0 0 1-3.963.386L3.84 14.622a1 1 0 0 1-1.161-.722l-.551-2.053a1 1 0 0 1 .646-1.206L16.455 6z"/>
    <path d="m22.32 12.433-1.932.517a2 2 0 0 1-2.45-1.415l-1.413-5.272a2 2 0 0 1 1.415-2.45l1.931-.517z"/>
  </g>
  <path d="M12.901 14.803 16 21m-8 0 3.099-6.197M14 13a2 2 0 1 1-4 0 2 2 0 0 1 4 0M16.525 6.262a2 2 0 0 1 1.414-2.45l1.932-.517 2.448 9.136-1.932.518a2 2 0 0 1-2.45-1.414zM4.513 10.05l-1.741.59a1 1 0 0 0-.645 1.206l.55 2.054a1 1 0 0 0 1.162.722l6.154-1.227m-5.48-3.345 11.942-4.048M4.513 10.05 4.098 8.5m13.91 3.297-4.008.8"/>
    </svg>
  );
}
