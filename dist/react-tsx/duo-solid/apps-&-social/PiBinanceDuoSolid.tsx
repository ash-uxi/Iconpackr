import React from 'react';

/**
 * PiBinanceDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiBinanceDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiBinanceDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'binance icon',
  ...props
}: PiBinanceDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M13.516 8.668a2.145 2.145 0 0 0-3.034 0l-1.815 1.815a2.145 2.145 0 0 0 0 3.034l1.815 1.815a2.145 2.145 0 0 0 3.034 0l1.815-1.815a2.145 2.145 0 0 0 0-3.034z" /> <path d="m3.411 13.718-.341-.342a1.947 1.947 0 0 1 0-2.753l.341-.34m17.177 0 .342.34c.76.76.76 1.993 0 2.753l-.342.341m-3.435 3.436-3.534 3.534a2.29 2.29 0 0 1-3.239 0l-3.533-3.534M17.153 6.847l-3.534-3.534a2.29 2.29 0 0 0-3.239 0L6.847 6.847" opacity=".28" />
    </svg>
  );
}
