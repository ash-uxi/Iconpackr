import React from 'react';

/**
 * PiWindowBrowserDuoSolid icon from the duo-solid style in devices category.
 */
interface PiWindowBrowserDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiWindowBrowserDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'window-browser icon',
  ...props
}: PiWindowBrowserDuoSolidProps): JSX.Element {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      
       style={{color: color || "currentColor"}}
      
      role="img"
      aria-label={ariaLabel}
      {...props}
    >
      <path fill={color || "currentColor"} fillRule="evenodd" d="M22 9.27v-.04c0-.805 0-1.47-.044-2.01-.046-.563-.145-1.08-.392-1.565a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392-.541-.044-1.206-.044-2.01-.044H7.758c-.805 0-1.47 0-2.01.044-.563.046-1.08.145-1.565.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C2 7.759 2 8.425 2 9.229v6.484c0 .805 0 1.47.044 2.01.046.563.145 1.08.392 1.565a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392.541.044 1.206.044 2.01.044h8.483c.805 0 1.47 0 2.01-.044.563-.046 1.08-.145 1.565-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.01z" clipRule="evenodd" opacity=".28" /> <path d="M3 10.47h18M6 6.47h.01m2.99 0h.01m2.99 0h.01" />
    </svg>
  );
}
