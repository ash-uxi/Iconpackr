import React from 'react';

/**
 * PiVolumeOneDuoSolid icon from the duo-solid style in media category.
 */
interface PiVolumeOneDuoSolidProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  color?: string;
  className?: string;
  ariaLabel?: string;
}

export default function PiVolumeOneDuoSolid({
  size = 24,
  color,
  className,
  ariaLabel = 'volume-one icon',
  ...props
}: PiVolumeOneDuoSolidProps): JSX.Element {
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
      <path fill={color || "currentColor"} d="M15 5.087c0-2.524-2.853-3.992-4.907-2.525L7.28 4.572a3.9 3.9 0 0 1-1.514.655A5.93 5.93 0 0 0 1 11.04v1.918a5.93 5.93 0 0 0 4.766 5.814 3.9 3.9 0 0 1 1.514.656l2.813 2.009C12.147 22.905 15 21.437 15 18.913z" opacity=".28" /> <path d="M18 14c.317-.263.569-.574.74-.918.172-.343.26-.71.26-1.082 0-.371-.088-.74-.26-1.082A2.9 2.9 0 0 0 18 10" />
    </svg>
  );
}
