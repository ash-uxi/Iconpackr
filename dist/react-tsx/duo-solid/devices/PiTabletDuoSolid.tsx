import React from 'react';

/**
 * PiTabletDuoSolid icon from the duo-solid style in devices category.
 */
interface PiTabletDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiTabletDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'tablet icon',
  ...props
}: PiTabletDuoSolidProps): JSX.Element {
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
      <path d="M10 19h4" /> <path fill={color || "currentColor"} d="M9.357 1C8.273 1 7.4 1 6.691 1.058c-.728.06-1.369.185-1.96.487A5 5 0 0 0 2.544 3.73c-.302.592-.428 1.233-.487 1.961C2 6.4 2 7.273 2 8.357v7.286c0 1.084 0 1.958.058 2.666.06.729.185 1.369.487 1.961a5 5 0 0 0 2.185 2.185c.592.302 1.233.428 1.961.487C7.4 23 8.273 23 9.357 23h5.286c1.084 0 1.958 0 2.666-.058.729-.06 1.369-.185 1.961-.487a5 5 0 0 0 2.185-2.185c.302-.592.428-1.232.487-1.961C22 17.6 22 16.727 22 15.643V8.357c0-1.084 0-1.958-.058-2.666-.06-.728-.185-1.369-.487-1.961a5 5 0 0 0-2.185-2.185c-.592-.302-1.232-.428-1.961-.487C16.6 1 15.727 1 14.643 1z" opacity=".28" />
    </svg>
  );
}
