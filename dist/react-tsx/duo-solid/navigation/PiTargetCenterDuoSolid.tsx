import React from 'react';

/**
 * PiTargetCenterDuoSolid icon from the duo-solid style in navigation category.
 */
interface PiTargetCenterDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTargetCenterDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'target-center icon',
  ...props
}: PiTargetCenterDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} fillRule="evenodd" d="M10.418 1.972A10 10 0 0 1 12 1.85c5.606 0 10.15 4.544 10.15 10.15q0 .216-.009.431c-.227 5.406-4.68 9.72-10.14 9.72q-.797 0-1.583-.124c-4.716-.739-8.354-4.722-8.559-9.595A10 10 0 0 1 1.85 12c0-5.069 3.714-9.267 8.568-10.028M12 5a7.002 7.002 0 0 0 0 14 7 7 0 1 0 0-14m-.78 2.06a5 5 0 1 1 1.564 9.879A5 5 0 0 1 11.22 7.06z" clipRule="evenodd" opacity=".28" /> <path d="M12 21.15V2.85M2.85 12h18.3" />
    </svg>
  );
}
