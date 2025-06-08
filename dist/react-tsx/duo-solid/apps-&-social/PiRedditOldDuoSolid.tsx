import React from 'react';

/**
 * PiRedditOldDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiRedditOldDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiRedditOldDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'reddit-old icon',
  ...props
}: PiRedditOldDuoSolidProps): JSX.Element {
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
      <path d="M15.589 17.043c-.717.682-2.058 1.141-3.593 1.141s-2.875-.459-3.592-1.141m7.095-3.897h.01m-7.01 0h.01m.49 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m7 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" /> <path fill={color || "currentColor"} d="M20.04 1.354c-.81 0-1.527.401-1.96 1.016l-2.726-.495a2.5 2.5 0 0 0-2.757 1.504L11.31 6.664c-2.05.111-3.948.715-5.491 1.684a3.166 3.166 0 1 0-3.669 4.9Q2 13.928 2 14.645c0 4.638 4.726 8 10 8s10-3.362 10-8q-.001-.716-.151-1.396a3.167 3.167 0 1 0-3.668-4.9c-1.354-.85-2.982-1.42-4.747-1.623l1.019-2.599a.5.5 0 0 1 .544-.284l2.717.494a2.4 2.4 0 1 0 2.327-2.983" opacity=".28" />
    </svg>
  );
}
