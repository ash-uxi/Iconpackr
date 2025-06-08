import React from 'react';

/**
 * PiMetamaskDuoSolid icon from the duo-solid style in apps-&-social category.
 */
interface PiMetamaskDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMetamaskDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'metamask icon',
  ...props
}: PiMetamaskDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M19.324 2.47a2.5 2.5 0 0 1 3.098 1.573c.035.102.075.204.123.328l.042.108c.063.164.136.357.197.562.114.385.214.894.094 1.447l-.016.075-1.142 4.53a3 3 0 0 0 .064 1.685l.856 2.562a2.5 2.5 0 0 1 .022 1.52l-.718 2.365a2.5 2.5 0 0 1-3.037 1.689l-2.364-.631a.5.5 0 0 0-.419.075l-1.655 1.178a2.5 2.5 0 0 1-1.45.464h-2.043c-.52 0-1.029-.163-1.452-.465L7.878 20.36a.5.5 0 0 0-.42-.077l-2.36.63a2.5 2.5 0 0 1-3.038-1.692l-.714-2.366a2.5 2.5 0 0 1 .02-1.508l.85-2.573a3 3 0 0 0 .062-1.673L1.14 6.56c-.144-.575-.043-1.107.074-1.505.06-.202.13-.394.192-.555l.041-.109c.047-.121.085-.221.12-.322a2.5 2.5 0 0 1 3.13-1.57l4.6 1.478A.5.5 0 0 0 9.448 4h4.826q.076 0 .147-.022z" opacity=".28" /> <path d="M9.5 12c0 .545-.455 1-1 1s-1-.455-1-1 .455-1 1-1 1 .455 1 1m7 0c0 .545-.455 1-1 1s-1-.455-1-1 .455-1 1-1 1 .455 1 1" />
    </svg>
  );
}
