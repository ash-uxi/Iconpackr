import React from 'react';

/**
 * PiProductHuntDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiProductHuntDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiProductHuntDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'product-hunt icon',
  ...props
}: PiProductHuntDuoSolidProps): JSX.Element {
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
      <path d="M10 13.625V8h2.813a2.813 2.813 0 0 1 0 5.625zm0 0V17" /> <path fill={color || "currentColor"} d="M12 1.85C6.394 1.85 1.85 6.394 1.85 12S6.394 22.15 12 22.15 22.15 17.606 22.15 12 17.606 1.85 12 1.85" opacity=".28" />
    </svg>
  );
}
