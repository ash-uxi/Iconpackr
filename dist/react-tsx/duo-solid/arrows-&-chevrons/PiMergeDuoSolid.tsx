import React from 'react';

/**
 * PiMergeDuoSolid icon from the duo-solid style in arrows-&-chevrons category.
 */
interface PiMergeDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiMergeDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'merge icon',
  ...props
}: PiMergeDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M12 3c-.372 0-.739.13-1.035.376a21.6 21.6 0 0 0-3.78 4.074 1 1 0 0 0 .897 1.577l2.022-.167a23 23 0 0 1 3.792 0l2.022.167a1 1 0 0 0 .896-1.577 21.6 21.6 0 0 0-3.779-4.074A1.62 1.62 0 0 0 12 3" /> <path d="M12 7.782V13l-6 7m12 0-3.429-4" opacity=".28" />
    </svg>
  );
}
